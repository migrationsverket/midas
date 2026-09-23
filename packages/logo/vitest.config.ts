import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import { playwright } from '@vitest/browser-playwright'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: ['default'],
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
            setupFiles: ['vitest.setup.ts'],
          },
        },
      ],
    },
  }),
)
