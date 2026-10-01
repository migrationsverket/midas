/**
 * Vitest reporter that collects failed `toMatchScreenshot()` assertions into a
 * folder that build-report.mjs turns into a static HTML diff viewer and a PR
 * comment.
 *
 * Vitest already records a `visual-regression` artifact for every failed
 * screenshot, with the reference, actual and diff images attached (written to
 * `.vitest-attachments/`). This reporter copies those images next to a
 * manifest.json per project, so the report doesn't have to guess anything
 * from file names.
 *
 * Output: <outputDir>/manifest.json and <outputDir>/<n>/{reference,actual,diff}.png
 */

import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

/**
 * @typedef {import('vitest/node').Reporter} Reporter
 * @typedef {import('vitest/node').TestModule} TestModule
 * @typedef {import('vitest/node').Vitest} Vitest
 *
 * @typedef {object} VisualReportImage
 * @property {string} src Path relative to outputDir
 * @property {number} width
 * @property {number} height
 *
 * @typedef {object} VisualReportEntry
 * @property {string} id
 * @property {string} file Spec file, relative to the project root
 * @property {string} name Full test name (describe blocks + test name)
 * @property {string} message
 * @property {boolean} isNew No baseline exists yet, `actual` is the new screenshot
 * @property {Partial<Record<'reference' | 'actual' | 'diff', VisualReportImage>>} images
 *
 * @typedef {object} VisualReportManifest
 * @property {string} project
 * @property {number} total Screenshot tests that ran
 * @property {VisualReportEntry[]} failures
 */

const IMAGE_NAMES = ['reference', 'actual', 'diff']

/** @implements {Reporter} */
export class VisualReportReporter {
  /**
   * @param {{ project: string, outputDir: string }} options outputDir is
   *   resolved against the Vitest root (the package folder)
   */
  constructor({ project, outputDir }) {
    this.project = project
    this.outputDir = outputDir
  }

  /** @param {Vitest} vitest */
  onInit(vitest) {
    this.outputDir = resolve(vitest.config.root, this.outputDir)
  }

  /** @param {ReadonlyArray<TestModule>} testModules */
  async onTestRunEnd(testModules) {
    await rm(this.outputDir, { recursive: true, force: true })
    await mkdir(this.outputDir, { recursive: true })

    /** @type {VisualReportManifest} */
    const manifest = { project: this.project, total: 0, failures: [] }

    for (const testModule of testModules) {
      for (const testCase of testModule.children.allTests()) {
        manifest.total++
        if (testCase.result().state !== 'failed') continue

        const id = String(manifest.failures.length + 1)
        /** @type {VisualReportEntry} */
        const entry = {
          id,
          file: testModule.relativeModuleId,
          name: testCase.fullName,
          message:
            testCase.result().errors?.[0]?.message ?? 'Screenshot mismatch',
          isNew: false,
          images: {},
        }

        const artifact = testCase
          .artifacts()
          .find(a => a.type === 'internal:toMatchScreenshot')

        if (artifact) {
          entry.message = artifact.message
          await mkdir(join(this.outputDir, id), { recursive: true })

          // Without a baseline, Vitest attaches the freshly captured
          // screenshot as `reference` (it's what would be stored), so report
          // it as the actual image instead.
          const attachments = artifact.attachments ?? []
          entry.isNew =
            attachments.length > 0 &&
            attachments.every(attachment => attachment.name === 'reference')

          for (const attachment of attachments) {
            if (!IMAGE_NAMES.includes(attachment.name) || !attachment.path) {
              continue
            }
            const name = entry.isNew ? 'actual' : attachment.name
            const src = `${id}/${name}.png`
            await copyFile(attachment.path, join(this.outputDir, src))
            entry.images[name] = {
              src,
              width: attachment.width,
              height: attachment.height,
            }
          }
        }

        manifest.failures.push(entry)
      }
    }

    await writeFile(
      join(this.outputDir, 'manifest.json'),
      JSON.stringify(manifest, null, 2),
    )
  }
}
