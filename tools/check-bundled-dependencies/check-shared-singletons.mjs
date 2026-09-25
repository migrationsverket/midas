#!/usr/bin/env node
/**
 * Catches the dual-instance failure mode: a handful of our runtime deps
 * (react-aria-components, react-aria, react-stately, and their @react-aria/*,
 * @react-stately/*, @internationalized/*, @react-types/* subpackages) keep
 * real module-scope state — id registries, focus-scope trees, description
 * node maps. Our build externalizes them so every @midas-ds/* package shares
 * exactly one instance, resolved once by the consumer's own bundler. If any
 * package's build config bundles one of these instead of externalizing it,
 * that package ships a private copy — and the moment it's used alongside a
 * sibling @midas-ds/* package that correctly externalized the same module
 * (e.g. `layout` depends on `components`), you get two disconnected copies
 * of state that's supposed to be shared. Symptoms are exactly the kind of
 * thing this repo has hit before from a different cause (corrupted
 * node_modules): misplaced popovers, focus escaping a dialog, broken
 * keyboard nav — bugs that only reproduce when two packages are combined,
 * so they're easy to miss in either package's own isolated tests.
 *
 * This script never inspects config (a vite.config.ts external list can say
 * anything and still not match what actually got built) — it only trusts
 * the built output. For each package under dist/packages/<name>/, it finds
 * every watched module actually referenced in that package's own src/, then
 * verifies the SAME module still shows up as a bare (external) import
 * specifier somewhere in that package's built output. If a watched module is
 * used but never appears as an external specifier in dist, it was bundled
 * instead of externalized.
 *
 * Builds nothing itself — run it after `nx build`/`nx affected -t build`,
 * against whatever's already in dist/packages/<name>/.
 */

import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  srcPackagesDir,
  findFiles,
  findJsFiles,
  findBareImports,
  builtPackages,
} from './shared.mjs'

// Modules with real module-scope singleton state that every @midas-ds/*
// package must share a single instance of. Exact names, or a `prefix` for
// an entire scope (matches our build's own externalization patterns:
// /@react-aria/, /@react-stately/, /@internationalized/, /@react-types/).
// Deliberately excludes @react-types/* — that scope ships type declarations
// only (no runtime JS at all), so it can never hold singleton state and can
// never appear as a real import specifier in built output.
const WATCHED = [
  { name: 'react-aria-components' },
  { name: 'react-aria' },
  { name: 'react-stately' },
  { prefix: '@react-aria/' },
  { prefix: '@react-stately/' },
  { prefix: '@internationalized/' },
]

function isWatched(specifier) {
  return WATCHED.some(w =>
    w.name ? specifier === w.name : specifier.startsWith(w.prefix),
  )
}

// Captures every top-level `import <clause> from 'x'` statement, including
// type-only ones — classified afterwards by isRuntimeImportClause, since a
// type-only import (whole-statement `import type`, or every individual
// specifier marked `type`) compiles away entirely and can never appear in
// dist output. Counting one as "used" would be a false positive.
const IMPORT_STATEMENT_RE = /^\s*import\s+([^;]+?)\s*from\s*['"]([^'"]+)['"]/gm

// `clause` is everything between `import` and `from`, e.g. `type Key`,
// `{ type Key }`, `Foo, { type Bar, Baz }`, `* as ns`.
function isRuntimeImportClause(clause) {
  const trimmed = clause.trim()
  if (/^type\s/.test(trimmed)) return false // whole-statement `import type ...`

  const braceStart = trimmed.indexOf('{')
  if (braceStart === -1) return true // bare default or `* as ns` — always runtime

  const beforeBrace = trimmed.slice(0, braceStart).trim()
  if (beforeBrace.replace(/,$/, '').trim() !== '') return true // `Foo, { ... }` — default import is runtime regardless of the braces

  const braceEnd = trimmed.lastIndexOf('}')
  const entries = trimmed
    .slice(braceStart + 1, braceEnd === -1 ? undefined : braceEnd)
    .split(',')
    .map(entry => entry.trim())
    .filter(Boolean)

  // Runtime unless every named entry is individually marked `type`.
  return entries.some(entry => !/^type\s/.test(entry))
}

// Story/spec/test files are dev-only — never part of a package's published
// entry points, so anything they import can never appear in dist output.
// Counting their imports as "used" would be a false positive.
const NON_SHIPPING_FILE_RE = /\.(stories|spec|test)\.[tj]sx?$/

function findWatchedSourceImports(dir) {
  const found = new Set()
  for (const file of findFiles(dir, ['.ts', '.tsx', '.js', '.jsx'])) {
    if (NON_SHIPPING_FILE_RE.test(file)) continue
    const content = readFileSync(file, 'utf-8')
    for (const match of content.matchAll(IMPORT_STATEMENT_RE)) {
      const [, clause, specifier] = match
      if (isWatched(specifier) && isRuntimeImportClause(clause)) {
        found.add(specifier)
      }
    }
  }
  return found
}

let hasFailures = false
let checkedAny = false

for (const name of builtPackages()) {
  const srcDir = join(srcPackagesDir, name, 'src')
  const distDir = join(srcPackagesDir, '..', 'dist/packages', name)
  if (!existsSync(srcDir)) continue // not every dist/packages entry has a packages/<name>/src

  checkedAny = true

  const usedInSource = findWatchedSourceImports(srcDir)
  if (usedInSource.size === 0) {
    console.log(`. packages/${name}: doesn't use any watched shared module.`)
    continue
  }

  const externalizedInOutput = new Set()
  for (const file of findJsFiles(distDir)) {
    for (const specifier of findBareImports(file)) {
      externalizedInOutput.add(specifier)
    }
  }

  const bundledInstead = [...usedInSource]
    .filter(specifier => !externalizedInOutput.has(specifier))
    .sort()

  if (bundledInstead.length > 0) {
    hasFailures = true
    console.error(
      `\n✗ packages/${name}: used in src/ but missing as an external import in dist output (bundled instead of externalized):`,
    )
    for (const specifier of bundledInstead) {
      console.error(`    ${specifier}`)
    }
  } else {
    console.log(
      `✓ packages/${name}: all ${usedInSource.size} watched shared module(s) correctly externalized.`,
    )
  }
}

if (!checkedAny) {
  console.log(
    'check-shared-singletons: no dist/packages found — nothing built to check, skipping.',
  )
  process.exit(0)
}

if (hasFailures) {
  console.error(
    "\nEach module listed above must stay external (check the package's vite.config.mts " +
      'rollupOptions/rolldownOptions.external) — bundling it means this package ships ' +
      'its own private copy of shared singleton state, which silently breaks the moment ' +
      "it's combined with a sibling @midas-ds/* package that externalized the same module. " +
      'See tools/check-bundled-dependencies/check-shared-singletons.mjs for why this matters.',
  )
  process.exit(1)
}

console.log('\ncheck-shared-singletons: all clear.')
