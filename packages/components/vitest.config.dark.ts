/// <reference types="@vitest/browser/providers/playwright" />

import { defineProject } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname =
  typeof import.meta.url !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineProject({
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  },
  plugins: [
    storybookTest({
      configDir: path.join(dirname, '.storybook'),
      storybookUrl: 'http://localhost:4400',
    }),
  ],
  test: {
    name: 'storybook:dark-mode',
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium', context: { colorScheme: 'dark' } }],
    },
    setupFiles: [path.join(dirname, '.storybook', 'vitest.setup.ts')],
  },
})
