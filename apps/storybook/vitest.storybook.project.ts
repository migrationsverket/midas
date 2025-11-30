/// <reference types="@vitest/browser/providers/playwright" />
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BrowserContextOptions } from 'playwright'
import { TestProjectConfiguration } from 'vitest/config.js'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'

interface Props {
  name: string
  snapshotSubpath: string
  context?: BrowserContextOptions
  setupFile?: string
}

const currentDirectory =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

const isCI = !!process.env.GITHUB_ACTIONS

export const defineStorybookProject = async ({
  name,
  context,
  snapshotSubpath,
  setupFile,
}: Props) =>
  ({
    extends: true,
    plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      await storybookTest({
        configDir: join(currentDirectory, '.storybook'),
        storybookUrl: 'http://localhost:4400',
      }),
      ...(isCI
        ? []
        : [
            storybookVis({
              snapshotRootDir: `__vis__/${snapshotSubpath}`,
            }),
          ]),
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
      setupFiles: [
        join(
          '.storybook',
          setupFile || (isCI ? 'vitest.setup.ci.ts' : 'vitest.setup.ts')
        ),
      ],
    },
  }) satisfies TestProjectConfiguration
