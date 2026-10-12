/**
 * Vitest config for a package's visual regression tests: browser mode in
 * Chromium, the shared setup, and the reporter for the CI diff report.
 *
 *   // vitest.config.visual.mts
 *   import { defineVisualConfig } from '@midas-ds/visual-testing'
 *   import viteConfig from './vite.config.mts'
 *
 *   export default defineVisualConfig(viteConfig)
 */

import { existsSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig, mergeConfig, type ViteUserConfig } from 'vitest/config'
import { VisualReportReporter } from './reporter.ts'

export interface VisualConfigOptions {
  /** More dependencies for Vite to pre-bundle, on top of the defaults */
  optimizeDeps?: string[]
  /** More setup files, relative to the package */
  setupFiles?: string[]
}

const toolSrc = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(toolSrc, '../../..')
const sharedSetup = join(toolSrc, 'setup.ts')

// Imported by stories and the shared setup. Discovered mid-run instead, they
// make Vite reload the page and fail the tests in flight on a cold cache
const defaultOptimizeDeps = ['@faker-js/faker', '@internationalized/date']

/** The package's own test setup (e.g. jest-dom matchers), if it has one */
function packageSetupFile(root: string) {
  return ['vitest.setup.mts', 'vitest.setup.ts'].find(file =>
    existsSync(join(root, file)),
  )
}

export function defineVisualConfig(
  viteConfig: ViteUserConfig,
  { optimizeDeps = [], setupFiles = [] }: VisualConfigOptions = {},
) {
  // Nx runs the visual target in the package folder
  const root = viteConfig.root ?? process.cwd()
  const project = basename(root)
  const packageSetup = packageSetupFile(root)

  return mergeConfig(
    viteConfig,
    defineConfig({
      optimizeDeps: {
        include: [...defaultOptimizeDeps, ...optimizeDeps],
      },
      // The shared setup and story helpers live in tools/, outside the
      // package, which Vite doesn't serve by default
      server: {
        fs: { allow: [workspaceRoot] },
      },
      test: {
        include: ['src/visual.spec.tsx'],
        reporters: [
          'default',
          new VisualReportReporter({
            project,
            outputDir: join(workspaceRoot, 'dist/visual-report', project),
          }),
        ],
        projects: [
          {
            extends: true,
            test: {
              name: 'visual',
              browser: {
                enabled: true,
                headless: true,
                provider: playwright(),
                instances: [{ browser: 'chromium' }],
                screenshotFailures: false,
              },
              setupFiles: [
                ...(packageSetup ? [packageSetup] : []),
                ...setupFiles,
                sharedSetup,
              ],
            },
          },
        ],
      },
    }),
  )
}
