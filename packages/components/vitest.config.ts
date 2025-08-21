/// <reference types="@vitest/browser/providers/playwright" />

import {
  defineConfig,
  mergeConfig,
  TestProjectConfiguration,
} from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import viteConfig from './vite.config'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const baseProject: TestProjectConfiguration = {
  extends: true,
  plugins: [
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
      storybookUrl: 'http://localhost:4400',
    }),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: false,
      provider: 'playwright',
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    setupFiles: [path.join('.storybook', 'vitest.setup.ts')],
  },
}

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      reporters: ['default'],
      projects: [
        baseProject,
        {
          ...baseProject,
          test: {
            ...baseProject.test,
            name: 'storybook:dark-mode',
            browser: {
              ...baseProject.test?.browser,
              instances: [
                {
                  browser: 'chromium',
                  context: {
                    colorScheme: 'dark',
                  },
                },
              ],
            },
          },
        },
      ],
    },
  }),
)
