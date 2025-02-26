import { test, expect } from '@playwright/test'

test('renders without errors', async ({ page }) => {
  const heading = page.getByRole('heading', { name: 'Welcome to e2e' })
  await page.goto('/')
  await expect(heading).toBeVisible()
})
