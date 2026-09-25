import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      '**/vite.config.{mjs,js,ts,mts}',
      '**/vitest.config.{mjs,js,ts,mts}',
      '!apps/playground/vite.config.mts',
      '!apps/storybook/vite.config.mts',
      '!packages/components/vite.config.mts',
      '!packages/layout/vite.config.mts',
      '!packages/table-styles/vite.config.mts',
    ],
  },
})
