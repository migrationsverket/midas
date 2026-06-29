import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      '**/vite.config.{mjs,js,ts,mts}',
      '**/vitest.config.{mjs,js,ts,mts}',
      '!apps/playground/vite.config.ts',
      '!apps/storybook/vite.config.ts',
      '!packages/components/vite.config.ts',
      '!packages/layout/vite.config.ts',
      '!packages/table-styles/vite.config.ts',
    ],
  },
})
