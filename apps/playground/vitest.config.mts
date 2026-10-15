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
          extends: true,
          test: {
            browser: {
              enabled: true,
              headless: true,
              provider: browserProvider(),
              instances: browserInstances(),
              screenshotFailures: false,
            },
          },
        },
      ],
    },
  }),
)
