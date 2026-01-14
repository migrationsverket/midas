import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages = [
  '/',
  'release-notes',
  'get-started/about',
  'get-started/install',
  'get-started/contribute/coding',
  'get-started/contribute/tests',
  'get-started/contribute/tokens',
  'get-started/contribute/tokens/dev-tokens',
  'basics/principles',
  'basics/tokens',
  'basics/accessibility',
  'basics/language',
  'design-patterns/buttons-and-links',
  'design-patterns/forms',
  'design-patterns/page-loading',
  'design-patterns/validation',
  'dev/client-side-routing',
  'dev/common-issues',
  'dev/dark-mode',
  'dev/forms',
  'dev/localization',
  'dev/react-datepicker',
  'dev/tanstack-table',
  'components/badge',
  'components/breadcrumbs',
  'components/button',
  'components/calendar',
  'components/checkbox',
  'components/combobox',
  'components/container/accordion',
  'components/container/card',
  'components/container/layout',
  'components/container/table',
  'components/date-picker',
  'components/datefield',
  'components/file-trigger',
  'components/grid',
  'components/heading',
  'components/info-banner',
  'components/layout',
  'components/link-button',
  'components/link',
  'components/logo',
  'components/menu',
  'components/modal',
  'components/popover',
  'components/progress-bar',
  'components/radio',
  'components/search-field',
  'components/select',
  'components/skeleton',
  'components/spinner',
  'components/table',
  'components/tabs',
  'components/tag',
  'components/text',
  'components/textarea',
  'components/textfield',
  'components/toast',
  'components/tooltip',
]

// light mode
pages.forEach(async path => {
  test(
    path + ' has no a11y violations for color contrast in light mode',
    async ({ page }) => {
      await page.goto('http://localhost:3000/' + path)
      // await page.locator('.theme-code-block').first().waitFor()

      const accessibilityScanResults = await new AxeBuilder({ page })
        // .include('.theme-code-block')
        .withRules('color-contrast')
        .analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    },
  )
})

pages.forEach(async path => {
  test(
    path + ' has no a11y violations color contrast in dark mode',
    async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark' })
      await page.goto('http://localhost:3000/' + path)

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules('color-contrast')
        .analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    },
  )
})
