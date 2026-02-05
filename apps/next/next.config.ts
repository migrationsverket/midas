import type { NextConfig } from 'next'
import { PHASE_PRODUCTION_BUILD, type PHASE_TYPE } from 'next/constants'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const workspaceRoot = resolve(__dirname, '../..')

const packages = readdirSync(resolve(workspaceRoot, 'packages'))

const importPath = process.env.E2E_REGISTRY
  ? 'apps/next/node_modules/@midas-ds'
  : 'dist/packages'

const addImportPath = (path: string) => (moduleName: string) => [
  moduleName,
  `${path}/${moduleName}`,
]

export default (
  phase: PHASE_TYPE,
  { defaultConfig }: { defaultConfig: NextConfig },
): NextConfig => ({
  ...defaultConfig,
  turbopack: {
    root: workspaceRoot,
    resolveAlias:
      process.env.E2E_REGISTRY || phase === PHASE_PRODUCTION_BUILD
        ? Object.fromEntries(packages.map(addImportPath(importPath)))
        : {},
  },
})
