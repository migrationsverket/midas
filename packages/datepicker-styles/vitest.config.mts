import { defaultExclude, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'
import { browserInstances, browserProvider } from '@midas-ds/test-browsers'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: ['default'],
      // Visual regression tests run separately (see vitest.config.visual.mts
      // and the `visual` nx target) so they can be non-blocking in CI
      // without affecting this project's regular, required `test` target.
      exclude: [...defaultExclude, 'src/visual.spec.tsx'],
      projects: [
        {
          test: {
            name: 'browser',
            browser: {
              enabled: true,
              headless: true,
              provider: browserProvider(),
              instances: browserInstances(),
              screenshotFailures: false,
            },
            setupFiles: ['vitest.setup.mts'],
          },
        },
      ],
    },
  }),
)
