import { defineConfig } from 'vitest/config'
import { dirname, join } from 'node:path'
import { playwright } from '@vitest/browser-playwright'
import { fileURLToPath } from 'node:url'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import storybookTest from '@storybook/addon-vitest/vitest-plugin'
import { BrowserConfigOptions } from 'vitest/node'
import { BrowserContextOptions } from 'playwright'

interface Options {
  name: string
  contextOptions?: BrowserContextOptions
}

const currentDirectory =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))

export const baseConfig = async ({ name, contextOptions }: Options) => {
  const browser = {
    enabled: true,
    headless: true,
    provider: playwright({ contextOptions }),
    instances: [{ browser: 'chromium' }],
    screenshotFailures: false,
  } satisfies BrowserConfigOptions

  return defineConfig({
    test: {
      testTimeout: 60000,
      reporters: ['default'],
      projects: [
        {
          extends: true,
          test: {
            name: 'interactions',
            browser,
            setupFiles: [join('.storybook', 'vitest.setup.ts')],
          },
        },
        {
          extends: true,
          plugins: [
            await storybookTest({
              configDir: join(currentDirectory, '.storybook'),
              storybookUrl: 'http://localhost:4400',
            }),
          ],
          test: {
            name: `a11y:${name}`,
            browser,
            setupFiles: [join('.storybook', 'vitest.setup.a11y.ts')],
          },
        },
        process.env.CI
          ? {}
          : {
              extends: true,
              plugins: [
                await storybookTest({
                  configDir: join(currentDirectory, '.storybook'),
                  storybookUrl: 'http://localhost:4400',
                }),
                [
                  storybookVis({
                    snapshotRootDir: `__vis__/${name}`,
                  }),
                ],
              ],
              test: {
                name: `snapshot:${name}`,
                browser,
                setupFiles: [join('.storybook', 'vitest.setup.snapshot.ts')],
              },
            },
      ],
    },
  })
}
