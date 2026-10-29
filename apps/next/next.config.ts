import type { NextConfig } from 'next'
import { readdirSync, readFileSync } from 'node:fs'
import { relative, resolve } from 'node:path'

const workspaceRoot = resolve(__dirname, '../..')
const packagesDir = resolve(workspaceRoot, 'packages')

interface PackageJson {
  name: string
  exports?: Record<string, string | Record<string, string>>
}

/**
 * Turbopack has no option for custom export conditions, so alias each
 * entry point of the workspace packages to the source file their
 * @midas-ds/source condition points at, e.g. @midas-ds/components to
 * packages/components/src/index.ts. Relative paths are resolved from this
 * folder, not the Turbopack root
 */
const sourceAliases = Object.fromEntries(
  readdirSync(packagesDir).flatMap(dir => {
    const { name, exports = {} }: PackageJson = JSON.parse(
      readFileSync(resolve(packagesDir, dir, 'package.json'), 'utf8'),
    )
    return Object.entries(exports).flatMap(([subpath, entry]) => {
      const source = typeof entry === 'object' && entry['@midas-ds/source']
      if (!source || subpath.includes('*')) return []
      return [
        [
          `${name}${subpath.slice(1)}`,
          relative(__dirname, resolve(packagesDir, dir, source)),
        ],
      ]
    })
  }),
)

const config: NextConfig = {
  turbopack: {
    root: workspaceRoot,
    // With E2E_REGISTRY the e2e tests run against the packages installed
    // from the local registry into apps/next/node_modules instead
    resolveAlias: process.env.E2E_REGISTRY ? {} : sourceAliases,
  },
}

export default config
