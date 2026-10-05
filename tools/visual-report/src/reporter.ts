/**
 * Vitest reporter that collects failed `toMatchScreenshot()` assertions into a
 * folder that build-report.ts turns into the report viewer's data and a PR
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
import type { Reporter, TestModule, Vitest } from 'vitest/node'
import type {
  VisualReportEntry,
  VisualReportImageName,
  VisualReportManifest,
  VisualReportReporterOptions,
} from './types.ts'

const IMAGE_NAMES: string[] = ['reference', 'actual', 'diff']

export class VisualReportReporter implements Reporter {
  private project: string
  private outputDir: string

  constructor({ project, outputDir }: VisualReportReporterOptions) {
    this.project = project
    this.outputDir = outputDir
  }

  onInit(vitest: Vitest) {
    this.outputDir = resolve(vitest.config.root, this.outputDir)
  }

  async onTestRunEnd(testModules: ReadonlyArray<TestModule>) {
    await rm(this.outputDir, { recursive: true, force: true })
    await mkdir(this.outputDir, { recursive: true })

    const manifest: VisualReportManifest = {
      project: this.project,
      total: 0,
      failures: [],
    }

    for (const testModule of testModules) {
      for (const testCase of testModule.children.allTests()) {
        manifest.total++
        const result = testCase.result()
        if (result.state !== 'failed') continue

        const id = String(manifest.failures.length + 1)
        const entry: VisualReportEntry = {
          id,
          file: testModule.relativeModuleId,
          name: testCase.fullName,
          suite:
            testCase.parent.type === 'suite' ? testCase.parent.fullName : '',
          test: testCase.name,
          message: result.errors?.[0]?.message ?? 'Screenshot mismatch',
          isNew: false,
          images: {},
        }

        const artifact = testCase
          .artifacts()
          .find(artifact => artifact.type === 'internal:toMatchScreenshot')

        if (artifact?.type === 'internal:toMatchScreenshot') {
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
            const name: VisualReportImageName = entry.isNew
              ? 'actual'
              : attachment.name
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
