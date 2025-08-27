/// <reference types="@vitest/browser/providers/playwright" />
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BrowserContextOptions } from 'playwright'
import { TestProjectConfiguration } from 'vitest/config.js'

interface Props {
  name: string
  context?: BrowserContextOptions
}

const currentDirectory =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

export const defineStorybookProject = async ({ name, context }: Props) =>
  ({
    extends: true,
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      await storybookTest({
        configDir: join(currentDirectory, '.storybook'),
        storybookUrl: 'http://localhost:4400',
      }),
    ],
    test: {
      name,
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [
          {
            browser: 'chromium',
            context,
          },
        ],
      },
      setupFiles: [join('.storybook', 'vitest.setup.ts')],
    },
  }) satisfies TestProjectConfiguration
