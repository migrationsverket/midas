#!/usr/bin/env node
/**
 * Turns the folders written by reporter.mjs into a static diff viewer
 * (index.html), a summary.json with the counts, and a markdown summary for a
 * sticky PR comment.
 *
 *   node tools/visual-report/build-report.mjs \
 *     --input dist/visual-report \
 *     --output dist/visual-report-site \
 *     --base-url https://designsystem.migrationsverket.se/pr-preview/visual/pr-123/ \
 *     --run-url https://github.com/.../actions/runs/... \
 *     --comment dist/visual-report/comment.md
 *
 * Everything read from the input comes from a PR's CI run, which may be a
 * fork, so it's treated as untrusted: text is escaped wherever it's printed,
 * and only images the manifests reference that really are PNGs get copied to
 * the output folder. Never publish the input folder itself.
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

const { values: args } = parseArgs({
  options: {
    input: { type: 'string', default: 'dist/visual-report' },
    output: { type: 'string', default: 'dist/visual-report-site' },
    'base-url': { type: 'string', default: '' },
    'run-url': { type: 'string', default: '' },
    comment: { type: 'string' },
    // How many failures get thumbnails in the PR comment
    'comment-limit': { type: 'string', default: '5' },
  },
})

const PROJECT_NAME = /^[\w.-]+$/
const IMAGE_SRC = /^\d+\/(reference|actual|diff)\.png$/
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
])

/** @returns {import('./reporter.mjs').VisualReportManifest[]} */
function readManifests(inputDir) {
  if (!existsSync(inputDir)) return []
  return readdirSync(inputDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && PROJECT_NAME.test(dirent.name))
    .filter(dirent => existsSync(join(inputDir, dirent.name, 'manifest.json')))
    .map(dirent => ({
      ...JSON.parse(
        readFileSync(join(inputDir, dirent.name, 'manifest.json'), 'utf8'),
      ),
      // The folder name is what the image paths are relative to
      project: dirent.name,
    }))
    .map(manifest => ({
      ...manifest,
      total: Number(manifest.total) || 0,
      failures: Array.isArray(manifest.failures) ? manifest.failures : [],
    }))
}

const escapeHtml = value =>
  String(value).replace(/[&<>"'|`]/g, char => `&#${char.charCodeAt(0)};`)

function isPng(file) {
  if (!existsSync(file)) return false
  return readFileSync(file).subarray(0, 8).equals(PNG_SIGNATURE)
}

/**
 * Image path relative to the report root, or undefined if the image is
 * missing or looks off. Valid images are copied to the output folder.
 */
function imagePath(project, image) {
  if (
    !image ||
    !PROJECT_NAME.test(project) ||
    !IMAGE_SRC.test(String(image.src)) ||
    !isPng(join(args.input, project, image.src))
  ) {
    return undefined
  }
  const src = `${project}/${image.src}`
  if (!existsSync(join(args.output, src))) {
    mkdirSync(dirname(join(args.output, src)), { recursive: true })
    copyFileSync(join(args.input, src), join(args.output, src))
  }
  return src
}

mkdirSync(args.output, { recursive: true })

const manifests = readManifests(args.input)
const failures = manifests.flatMap(manifest =>
  manifest.failures.map(failure => ({ ...failure, project: manifest.project })),
)
const total = manifests.reduce((sum, manifest) => sum + manifest.total, 0)
const newCount = failures.filter(failure => failure.isNew).length
const changedCount = failures.length - newCount

// ---------------------------------------------------------------------------
// index.html
// ---------------------------------------------------------------------------

function renderImage(project, image, label, missingText = `No ${label} image`) {
  const src = imagePath(project, image)
  if (!src) return `<div class="missing">${missingText}</div>`
  return `<img src="${escapeHtml(src)}" width="${Number(image.width)}" height="${Number(image.height)}" alt="${label}" loading="lazy">`
}

function renderFailure(failure) {
  const { project, images } = failure
  const anchor = `${escapeHtml(project)}-${escapeHtml(failure.id)}`
  const canCompare =
    imagePath(project, images.reference) && imagePath(project, images.actual)

  return `
<section class="failure" id="${anchor}">
  <h2><a href="#${anchor}">${escapeHtml(failure.name)}</a>${failure.isNew ? ' <span class="badge">New</span>' : ''}</h2>
  <p class="meta">${escapeHtml(project)} · ${escapeHtml(failure.file)}</p>
  <pre class="message">${escapeHtml(failure.message)}</pre>
  <div class="modes" role="tablist">
    <button type="button" data-mode="side" aria-pressed="true">Side by side</button>
    ${canCompare ? '<button type="button" data-mode="slider" aria-pressed="false">Slider</button>' : ''}
    ${canCompare ? '<button type="button" data-mode="onion" aria-pressed="false">Onion skin</button>' : ''}
  </div>
  <div class="view" data-view="side">
    <figure><figcaption>Reference</figcaption>${renderImage(project, images.reference, 'reference', failure.isNew ? 'No baseline yet' : undefined)}</figure>
    <figure><figcaption>Actual</figcaption>${renderImage(project, images.actual, 'actual')}</figure>
    <figure><figcaption>Diff</figcaption>${renderImage(project, images.diff, 'diff')}</figure>
  </div>
  ${
    canCompare
      ? `
  <div class="view" data-view="slider" hidden>
    <div class="stack">
      ${renderImage(project, images.reference, 'reference')}
      <div class="top" style="clip-path: inset(0 50% 0 0)">${renderImage(project, images.actual, 'actual')}</div>
    </div>
    <label>Actual on the left, reference on the right <input type="range" min="0" max="100" value="50" data-control="slider"></label>
  </div>
  <div class="view" data-view="onion" hidden>
    <div class="stack">
      ${renderImage(project, images.reference, 'reference')}
      <div class="top" style="opacity: 0.5">${renderImage(project, images.actual, 'actual')}</div>
    </div>
    <label>Fade from reference to actual <input type="range" min="0" max="100" value="50" data-control="onion"></label>
  </div>`
      : ''
  }
</section>`
}

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`

const title =
  failures.length === 0
    ? 'No visual changes'
    : [
        changedCount > 0 && plural(changedCount, 'changed screenshot'),
        newCount > 0 && plural(newCount, 'new screenshot'),
      ]
        .filter(Boolean)
        .join(', ')

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Visual regression · ${escapeHtml(title)}</title>
<style>
  :root { color-scheme: light dark; font-family: system-ui, sans-serif; }
  [hidden] { display: none !important; }
  body { margin: 0 auto; max-width: 1400px; padding: 1.5rem; }
  header p, .meta { color: GrayText; margin: 0.25rem 0; }
  nav ol { columns: 2; padding-left: 1.25rem; }
  .failure { border-top: 1px solid GrayText; padding: 1.5rem 0; }
  .failure h2 { font-size: 1.1rem; margin: 0; }
  .failure h2 a { color: inherit; }
  .message { white-space: pre-wrap; font-size: 0.85rem; }
  .modes { display: flex; gap: 0.25rem; margin-bottom: 1rem; }
  .modes button { font: inherit; padding: 0.25rem 0.75rem; cursor: pointer; }
  .modes button[aria-pressed='true'] { font-weight: bold; outline: 2px solid currentColor; }
  .view[data-view='side'] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
  figure { margin: 0; }
  figcaption { font-size: 0.85rem; margin-bottom: 0.25rem; }
  img { display: block; max-width: 100%; height: auto; background: repeating-conic-gradient(#8882 0 25%, transparent 0 50%) 0 0 / 16px 16px; }
  .stack { display: grid; width: fit-content; max-width: 100%; }
  .stack > * { grid-area: 1 / 1; }
  label { display: flex; gap: 0.5rem; align-items: center; margin-top: 0.5rem; font-size: 0.85rem; }
  label input { width: min(400px, 100%); }
  .badge { font-size: 0.75rem; padding: 0.1rem 0.4rem; border: 1px solid currentColor; border-radius: 0.25rem; vertical-align: middle; }
  .missing { padding: 2rem; border: 1px dashed GrayText; text-align: center; color: GrayText; }
</style>
</head>
<body>
<header>
  <h1>Visual regression · ${escapeHtml(title)}</h1>
  <p>${total} screenshot${total === 1 ? '' : 's'} compared across ${manifests.length} project${manifests.length === 1 ? '' : 's'}.${
    args['run-url']
      ? ` <a href="${escapeHtml(args['run-url'])}">CI run</a>`
      : ''
  }</p>
</header>
${
  failures.length > 0
    ? `<nav><ol>${failures
        .map(
          f =>
            `<li><a href="#${escapeHtml(f.project)}-${escapeHtml(f.id)}">${escapeHtml(f.name)}</a></li>`,
        )
        .join('')}</ol></nav>`
    : ''
}
${failures.map(renderFailure).join('\n')}
<script>
  for (const failure of document.querySelectorAll('.failure')) {
    const buttons = failure.querySelectorAll('[data-mode]')
    for (const button of buttons) {
      button.addEventListener('click', () => {
        for (const other of buttons) {
          other.setAttribute('aria-pressed', String(other === button))
        }
        for (const view of failure.querySelectorAll('[data-view]')) {
          view.hidden = view.dataset.view !== button.dataset.mode
        }
      })
    }
    for (const input of failure.querySelectorAll('[data-control]')) {
      const top = input.closest('.view').querySelector('.top')
      input.addEventListener('input', () => {
        if (input.dataset.control === 'slider') {
          top.style.clipPath = 'inset(0 ' + (100 - input.value) + '% 0 0)'
        } else {
          top.style.opacity = input.value / 100
        }
      })
    }
  }
</script>
</body>
</html>
`

writeFileSync(join(args.output, 'index.html'), html)
writeFileSync(
  join(args.output, 'summary.json'),
  JSON.stringify({
    projects: manifests.length,
    total,
    changed: changedCount,
    new: newCount,
  }),
)

// ---------------------------------------------------------------------------
// comment.md
// ---------------------------------------------------------------------------

if (args.comment) {
  const baseUrl = args['base-url'].replace(/\/?$/, '/')
  const limit = Number(args['comment-limit'])
  const reportLink = args['base-url']
    ? `[Open the full report](${baseUrl})`
    : ''
  const runLink = args['run-url'] ? `[CI run](${args['run-url']})` : ''
  const links = [reportLink, runLink].filter(Boolean).join(' · ')

  const thumbnail = (failure, name) => {
    const src = imagePath(failure.project, failure.images[name])
    if (!src || !args['base-url']) return '–'
    return `<img src="${baseUrl}${src}" width="160" alt="${name}">`
  }

  let comment
  if (manifests.length === 0) {
    comment = `### ⏭️ Visual regression\n\nNo visual tests were affected by this PR.`
  } else if (failures.length === 0) {
    comment = `### ✅ Visual regression\n\nNo visual changes in ${total} screenshots.`
  } else {
    const rows = failures.slice(0, limit).map(failure => {
      const badge = failure.isNew ? ' (new)' : ''
      const name = `<a href="${baseUrl}#${escapeHtml(failure.project)}-${escapeHtml(failure.id)}">${escapeHtml(failure.name)}</a>${badge}`
      return `| ${name} | ${thumbnail(failure, 'reference')} | ${thumbnail(failure, 'actual')} | ${thumbnail(failure, 'diff')} |`
    })
    const more =
      failures.length > limit
        ? `\n\n…and ${failures.length - limit} more in the full report.`
        : ''

    comment = [
      `### ❌ Visual regression: ${title}`,
      '',
      `${failures.length} of ${total} screenshot tests failed.${newCount > 0 ? ' New screenshots have no baseline yet.' : ''}`,
      '',
      '| Story | Reference | Actual | Diff |',
      '| --- | --- | --- | --- |',
      ...rows,
    ].join('\n')
    comment += more
    comment +=
      '\n\nIf the changes are intended, add the `visual:update` label to regenerate the baselines on this branch, then review the updated screenshots under **Files changed**.'
  }

  if (links) comment += `\n\n${links}`
  writeFileSync(args.comment, `${comment}\n`)
}
