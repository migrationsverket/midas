import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ColorSchemeSwitch.stories'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a primary ColorSchemeSwitch', async () => {
  beforeEach(async () => {
    await render(<Primary />)

    // Select "light mode"
    await page.getByRole('radio').first().click()
    await userEvent.keyboard('[ArrowRight]')
    await userEvent.keyboard('[Space]')
  })

  it('should be possible to tab to a button and select it', async () => {
    const lightModeButton = page.getByRole('radio').nth(1)
    expect(lightModeButton).toHaveAttribute('aria-checked', 'true')
  })

  it('color-scheme on body element should be light', async () => {
    const newColorScheme = document.body.style.colorScheme
    expect(newColorScheme).toBe('light')
  })

  it('it should accept a custom className', async () => {
    expect(page.getByRole('radiogroup')).toHaveClass(
      Primary.args.className as string,
    )
  })
})
