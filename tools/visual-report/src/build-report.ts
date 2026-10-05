#!/usr/bin/env node
/**
 * Turns the folders written by reporter.ts into the data the report viewer
 * (apps/visual-report-viewer) reads: report.json plus the images, a
 * summary.json with the counts, and a markdown summary for a sticky PR comment.
 *
 *   node tools/visual-report/src/build-report.ts \
 *     --input dist/visual-report \
 *     --output dist/visual-report-site \
 *     --base-url https://designsystem.migrationsverket.se/pr-preview/visual/pr-123/ \
 *     --report-url https://designsystem.migrationsverket.se/visual-report/?pr=123 \
 *     --run-url https://github.com/.../actions/runs/... \
 *     --comment dist/visual-report-site/comment.md
 *
 * or `npx nx run visual-report:report` with the defaults.
 *
 * Everything read from the input comes from a PR's CI run, which may be a
 * fork, so it's treated as untrusted: report.json is rebuilt field by field
 * from known keys, text in the comment is escaped, and only images the
 * manifests reference that really are PNGs get copied to the output folder.
 * Never publish the input folder itself.
 */

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { parseArgs } from 'node:util'
import type {
  VisualReport,
  VisualReportEntry,
  VisualReportImage,
  VisualReportImageName,
  VisualReportManifest,
  VisualReportSummary,
} from './types.ts'

const { values: args } = parseArgs({
  options: {
    input: { type: 'string', default: 'dist/visual-report' },
    output: { type: 'string', default: 'dist/visual-report-site' },
    // Where report.json and the images are served from (comment thumbnails)
    'base-url': { type: 'string', default: '' },
    // The viewer, opened on this report (comment links)
    'report-url': { type: 'string', default: '' },
    'run-url': { type: 'string', default: '' },
    comment: { type: 'string' },
    // How many failures get thumbnails in the PR comment
    'comment-limit': { type: 'string', default: '5' },
  },
})

const PROJECT_NAME = /^[\w.-]+$/
const IMAGE_SRC = /^\d+\/(reference|actual|diff)\.png$/
const IMAGE_NAMES: VisualReportImageName[] = ['reference', 'actual', 'diff']
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
])
const MAX_TEXT_LENGTH = 2000

type Untrusted = Record<string, unknown> | undefined

const text = (value: unknown) => String(value ?? '').slice(0, MAX_TEXT_LENGTH)

function isPng(file: string) {
  if (!existsSync(file)) return false
  return readFileSync(file).subarray(0, 8).equals(PNG_SIGNATURE)
}

/** Copies a referenced image to the output if it checks out */
function readImage(
  project: string,
  image: Untrusted,
): VisualReportImage | undefined {
  const src = String(image?.src)
  if (!IMAGE_SRC.test(src) || !isPng(join(args.input, project, src))) {
    return undefined
  }
  const path = `${project}/${src}`
  mkdirSync(dirname(join(args.output, path)), { recursive: true })
  copyFileSync(join(args.input, path), join(args.output, path))
  return {
    src: path,
    width: Number(image?.width) || 0,
    height: Number(image?.height) || 0,
  }
}

function readEntry(project: string, entry: Untrusted): VisualReportEntry {
  const images: VisualReportEntry['images'] = {}
  for (const name of IMAGE_NAMES) {
    const image = readImage(
      project,
      (entry?.images as Record<string, Untrusted>)?.[name],
    )
    if (image) images[name] = image
  }
  return {
    id: text(entry?.id),
    file: text(entry?.file),
    name: text(entry?.name),
    suite: text(entry?.suite),
    test: text(entry?.test ?? entry?.name),
    message: text(entry?.message),
    isNew: entry?.isNew === true,
    images,
  }
}

function readManifests(inputDir: string): VisualReportManifest[] {
  if (!existsSync(inputDir)) return []
  return readdirSync(inputDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && PROJECT_NAME.test(dirent.name))
    .filter(dirent => existsSync(join(inputDir, dirent.name, 'manifest.json')))
    .map(dirent => {
      // The folder name is what the image paths are relative to
      const project = dirent.name
      const manifest: Untrusted = JSON.parse(
        readFileSync(join(inputDir, project, 'manifest.json'), 'utf8'),
      )
      const failures: Untrusted[] = Array.isArray(manifest?.failures)
        ? manifest.failures
        : []
      return {
        project,
        total: Number(manifest?.total) || 0,
        failures: failures.map(entry => readEntry(project, entry)),
      }
    })
}

mkdirSync(args.output, { recursive: true })

const projects = readManifests(args.input)
const failures = projects.flatMap(manifest =>
  manifest.failures.map(failure => ({ ...failure, project: manifest.project })),
)
const newCount = failures.filter(failure => failure.isNew).length
const summary: VisualReportSummary = {
  projects: projects.length,
  total: projects.reduce((sum, manifest) => sum + manifest.total, 0),
  changed: failures.length - newCount,
  new: newCount,
}

const report: VisualReport = {
  version: 1,
  ...(args['run-url'] && { runUrl: args['run-url'] }),
  summary,
  projects,
}

writeFileSync(join(args.output, 'report.json'), JSON.stringify(report))
writeFileSync(join(args.output, 'summary.json'), JSON.stringify(summary))

// ---------------------------------------------------------------------------
// comment.md
// ---------------------------------------------------------------------------

type Failure = (typeof failures)[number]

const escapeHtml = (value: unknown) =>
  String(value).replace(/[&<>"'|`]/g, char => `&#${char.charCodeAt(0)};`)

const plural = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? '' : 's'}`

if (args.comment) {
  const baseUrl = args['base-url'].replace(/\/?$/, '/')
  const reportUrl = args['report-url']
  const limit = Number(args['comment-limit'])

  const title = [
    summary.changed > 0 && plural(summary.changed, 'changed screenshot'),
    summary.new > 0 && plural(summary.new, 'new screenshot'),
  ]
    .filter(Boolean)
    .join(', ')

  const thumbnail = (failure: Failure, name: VisualReportImageName) => {
    const image = failure.images[name]
    if (!image || !args['base-url']) return '–'
    return `<img src="${escapeHtml(baseUrl + image.src)}" width="160" alt="${name}">`
  }

  const storyName = (failure: Failure) => {
    const name = escapeHtml(failure.name)
    if (!reportUrl) return name
    const href = `${reportUrl}#${encodeURIComponent(failure.project)}/${encodeURIComponent(failure.id)}`
    return `<a href="${escapeHtml(href)}">${name}</a>`
  }

  let comment: string
  if (projects.length === 0) {
    comment = `### ⏭️ Visual regression\n\nNo visual tests were affected by this PR.`
  } else if (failures.length === 0) {
    comment = `### ✅ Visual regression\n\nNo visual changes in ${summary.total} screenshots.`
  } else {
    const rows = failures.slice(0, limit).map(failure => {
      const badge = failure.isNew ? ' (new)' : ''
      return `| ${storyName(failure)}${badge} | ${thumbnail(failure, 'reference')} | ${thumbnail(failure, 'actual')} | ${thumbnail(failure, 'diff')} |`
    })

    comment = [
      `### ❌ Visual regression: ${title}`,
      '',
      `${failures.length} of ${summary.total} screenshot tests failed.${newCount > 0 ? ' New screenshots have no baseline yet.' : ''}`,
      '',
      '| Story | Reference | Actual | Diff |',
      '| --- | --- | --- | --- |',
      ...rows,
    ].join('\n')
    if (failures.length > limit) {
      comment += `\n\n…and ${failures.length - limit} more in the full report.`
    }
    comment +=
      '\n\nIf the changes are intended, add the `visual:update` label to regenerate the baselines on this branch, then review the updated screenshots under **Files changed**.'
  }

  const links = [
    reportUrl && `[Open the full report](${reportUrl})`,
    args['run-url'] && `[CI run](${args['run-url']})`,
  ]
    .filter(Boolean)
    .join(' · ')
  if (links) comment += `\n\n${links}`
  writeFileSync(args.comment, `${comment}\n`)
}
