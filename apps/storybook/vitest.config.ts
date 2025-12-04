import { defineConfig, mergeConfig } from 'vitest/config'
import { defineStorybookProject } from './vitest.storybook.project'
import viteConfig from './vite.config'
import { join } from 'node:path'
import { playwright } from '@vitest/browser-playwright'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 40000,
      reporters: ['default'],
      projects: [
        defineStorybookProject({
          name: 'storybook',
          snapshotSubpath: 'light',
        }),
        {
          extends: true,
          test: {
            name: 'interactions',
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: 'chromium' }],
              screenshotFailures: false,
            },
            setupFiles: [join('.storybook', 'vitest.setup.ci.ts')],
          },
        },
      ],
    },
  }),
)
