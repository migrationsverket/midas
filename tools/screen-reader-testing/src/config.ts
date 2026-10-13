/**
 * Vitest config for screen reader regression tests: browser mode in Chromium
 * and the shared setup. Merge it with the package's own Vite config, and
 * extend or override anything with another mergeConfig:
 *
 *   // vitest.config.screen-reader.mts
 *   import { mergeConfig } from 'vitest/config'
 *   import { screenReaderConfig } from '@midas-ds/screen-reader-testing'
 *   import viteConfig from './vite.config.mts'
 *
 *   export default mergeConfig(viteConfig, screenReaderConfig)
 */

import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

const projectRoot = dirname(fileURLToPath(import.meta.url))
const workspaceRoot = resolve(projectRoot, '../../..')

export const screenReaderConfig = defineConfig({
  // Imported by stories and the shared setup. Discovered mid-run instead,
  // they make Vite reload the page and fail the tests in flight on a cold
  // cache
  optimizeDeps: {
    include: [
      '@faker-js/faker',
      '@internationalized/date',
      '@guidepup/virtual-screen-reader',
    ],
  },
  // The shared setup and helpers live in tools/, outside the package, which
  // Vite doesn't serve by default
  server: {
    fs: { allow: [workspaceRoot] },
  },
  test: {
    testTimeout: 10000,
    hookTimeout: 10000,
    name: 'screen-reader',
    include: ['src/screen-reader.spec.tsx'],
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
