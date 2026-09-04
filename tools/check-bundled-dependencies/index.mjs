#!/usr/bin/env node
/**
 * Catches a real, recurring failure mode: our Vite/Rollup build externalizes
 * imports matching known patterns (react-aria-components, /@react-aria/,
 * /@react-stately/, /@internationalized/, ...) so they aren't bundled twice
 * across Midas packages. That's correct for imports written directly in our
 * own src/. But when a *bundled* (non-externalized) dependency — e.g.
 * @react-spectrum/utils — itself imports something matching an external
 * pattern, that import survives in the published chunk as a bare specifier
 * with nothing in package.json requiring it. It works locally by accident
 * (something else in this monorepo's tree happens to provide it) and breaks
 * for real consumers the moment that accidental transitive path changes.
 *
 * This happened for real: @react-aria/ssr was pulled in by
 * useIsMobileDevice.ts (via @react-spectrum/utils's useMediaQuery) but never
 * declared in packages/layout/package.json — it only worked because
 * react-aria-components used to depend on @react-aria/ssr itself. When that
 * upstream dependency was dropped, consumers' builds broke with
 * "Failed to resolve import @react-aria/ssr". A manual audit the same day
 * found four more instances across layout and components — and running this
 * script for the very first time immediately caught a sixth, in
 * table-styles, that the manual audit had missed.
 *
 * This script builds nothing itself — it scans whatever's already in
 * dist/packages/<name>/ (run this after `nx build`/`nx affected -t build`,
 * so it naturally scopes to whatever a CI run actually built) and verifies
 * every bare import specifier in the output has a matching entry in that
 * package's own package.json dependencies or peerDependencies.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const repoRoot = new URL('../..', import.meta.url).pathname
const distPackagesDir = join(repoRoot, 'dist/packages')
const srcPackagesDir = join(repoRoot, 'packages')

// Always provided by the consumer's own app/bundler — never meaningful to
// require these be declared as a regular dependency.
const ALWAYS_ALLOWED = new Set(['react', 'react-dom'])

const IMPORT_SPECIFIER_RE = /(?:from|import)\s*\(?\s*['"]([^'"]+)['"]/g

function findJsFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stats = statSync(full)
    if (stats.isDirectory()) {
      results.push(...findJsFiles(full))
    } else if (entry.endsWith('.js') || entry.endsWith('.mjs')) {
      results.push(full)
    }
  }
  return results
}

function toPackageName(specifier) {
  if (specifier.startsWith('@')) {
    const [scope, name] = specifier.split('/')
    return `${scope}/${name}`
  }
  return specifier.split('/')[0]
}

function findBareImports(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const specifiers = new Set()
  for (const match of content.matchAll(IMPORT_SPECIFIER_RE)) {
    const specifier = match[1]
    if (!specifier.startsWith('.') && !specifier.startsWith('/')) {
      specifiers.add(toPackageName(specifier))
    }
  }
  return specifiers
}

if (!existsSync(distPackagesDir)) {
  console.log(
    'check-bundled-dependencies: no dist/packages found — nothing built to check, skipping.',
  )
  process.exit(0)
}

const builtPackages = readdirSync(distPackagesDir).filter(name =>
  statSync(join(distPackagesDir, name)).isDirectory(),
)

let hasFailures = false

for (const name of builtPackages) {
  const packageJsonPath = join(srcPackagesDir, name, 'package.json')
  if (!existsSync(packageJsonPath)) continue // not every dist/packages entry maps to packages/<name>

  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
  const declared = new Set([
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ])

  const distDir = join(distPackagesDir, name)
  const usedPackages = new Set()
  for (const file of findJsFiles(distDir)) {
    for (const pkg of findBareImports(file)) {
      usedPackages.add(pkg)
    }
  }

  const missing = [...usedPackages]
    .filter(pkg => !declared.has(pkg) && !ALWAYS_ALLOWED.has(pkg))
    .sort()

  if (missing.length > 0) {
    hasFailures = true
    console.error(`\n✗ packages/${name}: bundled output imports packages not declared in package.json:`)
    for (const pkg of missing) {
      console.error(`    ${pkg}`)
    }
  } else {
    console.log(`✓ packages/${name}: all bundled imports are declared dependencies.`)
  }
}

if (hasFailures) {
  console.error(
    '\nEach package above must declare the listed packages in its own "dependencies" ' +
      '(or "peerDependencies") in package.json — even if something else in this ' +
      "monorepo's tree currently provides them transitively. See " +
      'tools/check-bundled-dependencies/index.mjs for why this matters.',
  )
  process.exit(1)
}

console.log('\ncheck-bundled-dependencies: all clear.')
