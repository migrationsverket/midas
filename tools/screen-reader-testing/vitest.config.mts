import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

// Tests for the helpers themselves. They walk a real DOM, so they run in the
// browser like the screen reader tests that use them
export default defineConfig({
  test: {
    name: 'screen-reader-testing',
    include: ['src/**/*.spec.tsx'],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      screenshotFailures: false,
    },
  },
})
