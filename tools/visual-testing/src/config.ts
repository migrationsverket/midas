/**
 * Vitest config for visual regression tests: browser mode in Chromium, the
 * shared setup, and the reporter for the CI diff report. Merge it with the
 * package's own Vite config, and extend or override anything with another
 * mergeConfig:
 *
 *   // vitest.config.visual.mts
 *   import { mergeConfig } from 'vitest/config'
 *   import { visualConfig } from '@midas-ds/visual-testing'
 *   import viteConfig from './vite.config.mts'
 *
 *   export default mergeConfig(viteConfig, visualConfig)
 */

import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'
import { VisualReportReporter } from './reporter.ts'

const projectRoot = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(projectRoot, '../../..')

export const visualConfig = defineConfig({
  // Imported by stories and the shared setup. Discovered mid-run instead,
  // they make Vite reload the page and fail the tests in flight on a cold
  // cache
  optimizeDeps: {
    include: ['@faker-js/faker', '@internationalized/date'],
  },
  // The shared setup and story helpers live in tools/, outside the package,
  // which Vite doesn't serve by default
  server: {
    fs: { allow: [workspaceRoot] },
  },
  test: {
    testTimeout: 10000,
    hookTimeout: 10000,
    name: 'visual',
    include: ['src/visual.spec.tsx'],
    reporters: ['default', new VisualReportReporter()],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      screenshotFailures: false,
    },
    // Also runs the package's own vitest.setup.mts, see setup.ts
    setupFiles: [join(projectRoot, 'setup.ts')],
  },
})
