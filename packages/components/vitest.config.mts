import { defaultExclude, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'
import { playwright } from '@vitest/browser-playwright'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 2500,
      reporters: ['default'],
      // Visual and screen reader regression tests run separately (see
      // vitest.config.visual.mts, vitest.config.screen-reader.mts and their
      // nx targets) so they can be non-blocking in CI without affecting this
      // project's regular, required `test` target.
      exclude: [
        ...defaultExclude,
        'src/visual.spec.tsx',
        'src/screen-reader.spec.tsx',
      ],
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
