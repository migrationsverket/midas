import { test, expect } from '@playwright/test';

test('Button renders OK in forced-colors mode', async ({ page }) => {
  await page.emulateMedia({ forcedColors: 'active' });
  await page.goto('/iframe.html?id=components-button--primary'); // your story id

  const button = page.locator('.test-class');
  await expect(button).toHaveScreenshot('button-forced-colors.png');
});
