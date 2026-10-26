import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'
import { browserInstances, browserProvider } from '@midas-ds/test-browsers'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: ['default'],
      projects: [
        {
          test: {
            name: 'browser',
            browser: {
              enabled: true,
              headless: true,
              provider: browserProvider(),
              instances: browserInstances([
                {
                  name: 'desktop',
                  viewport: { width: 1024, height: 768 },
                },
                {
                  name: 'mobile',
                  viewport: { width: 320, height: 568 },
                },
              ]),
              screenshotFailures: false,
            },
            setupFiles: ['vitest.setup.mts'],
          },
        },
      ],
    },
  }),
)
