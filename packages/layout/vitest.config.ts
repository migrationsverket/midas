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
              instances: [
                {
                  name: 'desktop',
                  browser: 'chromium',
                  viewport: { width: 1024, height: 768 },
                },
                {
                  name: 'mobile',
                  browser: 'chromium',
                  viewport: { width: 320, height: 568 },
                },
              ],
              screenshotFailures: false,
            },
            setupFiles: ['vitest.setup.ts'],
          },
        },
      ],
    },
  }),
)
