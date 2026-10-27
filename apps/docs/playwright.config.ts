import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
  },
  // The tests open the dev server. Start it through Nx, or reuse one that's
  // already running, and wait until it answers. From the workspace root:
  // run from here, the theme tokens Nx builds first end up in this folder
  webServer: {
    command: 'npx nx run docs:serve',
    cwd: '../..',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 300_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
