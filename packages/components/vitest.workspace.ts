import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'unit',
      include: ['**/*.{test,spec}.{ts,tsx}'],
      exclude: ['**/*.browser.{test,spec}.{ts,tsx}'],
      environment: "jsdom",
    },
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'browser',
      include: ['**/*.browser.{test,spec}.{ts,tsx}'],
      browser: {
        enabled: true,
        name: 'chrome',
      },
    },
  },
])
