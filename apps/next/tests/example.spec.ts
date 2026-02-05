import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/midas/)
})

test('has a h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/midas/)
})

test('uses local package version in E2E_REGISTRY mode', async ({ page }) => {
  test.skip(!process.env.E2E_REGISTRY, 'Only runs in E2E registry mode')
  await page.goto('/')
  const version = await page.locator('[data-midas-version]').getAttribute('data-midas-version')
  expect(version).toContain('-local.')
})
