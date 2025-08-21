import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/components/vitest.config.ts'],
  },
})
