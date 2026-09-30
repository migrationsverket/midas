import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'
import { playwright } from '@vitest/browser-playwright'

// Split from vitest.config.mts so visual regression can run as its own nx
// target (`visual`) — separately cacheable, separately reportable, and not
// part of the required `test` target, so a screenshot diff never blocks a
// PR the way a real unit test failure does. Mirrors
// packages/components/vitest.config.visual.mts.
export default mergeConfig(
  viteConfig,
  defineConfig({
    optimizeDeps: {
      include: ['@faker-js/faker', '@internationalized/date'],
    },
    test: {
      testTimeout: 2500,
      reporters: ['default'],
      include: ['src/visual.spec.tsx'],
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
            setupFiles: ['vitest.setup.visual.mts'],
          },
        },
      ],
    },
  }),
)
