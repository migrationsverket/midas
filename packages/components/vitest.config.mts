import { defaultExclude, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'
import { playwright } from '@vitest/browser-playwright'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: ['default'],
      // Visual regression tests run separately (see vitest.config.visual.ts
      // and the `visual` nx target) so they can be non-blocking in CI
      // without affecting this project's regular, required `test` target.
      exclude: [...defaultExclude, 'src/visual.spec.tsx'],
      projects: [
        {
          extends: true,
          test: {
            name: 'browser',
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: 'chromium' }],
              screenshotFailures: false,
            },
            setupFiles: ['vitest.setup.mts'],
          },
        },
      ],
    },
  }),
)
