import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export const repoRoot = new URL('../../', import.meta.url).pathname
export const distPackagesDir = join(repoRoot, 'dist/packages')
export const srcPackagesDir = join(repoRoot, 'packages')

// Matches `import ... from 'x'`, `export ... from 'x'`, and `import('x')`.
export const IMPORT_SPECIFIER_RE = /(?:from|import)\s*\(?\s*['"]([^'"]+)['"]/g

export function findFiles(dir, extensions) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stats = statSync(full)
    if (stats.isDirectory()) {
      results.push(...findFiles(full, extensions))
    } else if (extensions.some(ext => entry.endsWith(ext))) {
      results.push(full)
    }
  }
  return results
}

export function findJsFiles(dir) {
  return findFiles(dir, ['.js', '.mjs'])
}

export function toPackageName(specifier) {
  if (specifier.startsWith('@')) {
    const [scope, name] = specifier.split('/')
    return `${scope}/${name}`
  }
  return specifier.split('/')[0]
}

export function isBareSpecifier(specifier) {
  return !specifier.startsWith('.') && !specifier.startsWith('/')
}

// Every bare specifier referenced anywhere in a built .js/.mjs file, resolved
// to top-level package names (e.g. `@react-aria/utils/foo` -> `@react-aria/utils`).
export function findBareImports(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const specifiers = new Set()
  for (const match of content.matchAll(IMPORT_SPECIFIER_RE)) {
    const specifier = match[1]
    if (isBareSpecifier(specifier)) {
      specifiers.add(toPackageName(specifier))
    }
  }
  return specifiers
}

export function builtPackages() {
  if (!existsSync(distPackagesDir)) return []
  return readdirSync(distPackagesDir).filter(name =>
    statSync(join(distPackagesDir, name)).isDirectory(),
  )
}
