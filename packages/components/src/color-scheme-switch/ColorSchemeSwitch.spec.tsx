import { beforeEach, describe, expect, it, vi } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ColorSchemeSwitch.stories'
import { render } from '../../test-utils'
import { ColorSchemeSwitch } from './ColorSchemeSwitch'

const { Primary } = composeStories(stories)

describe('given a primary ColorSchemeSwitch', async () => {
  beforeEach(async () => {
    await render(<Primary />)

    // Select "light mode" — light is now first in the DOM
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
  })

  it('should be possible to tab to a button and select it', async () => {
    const lightModeButton = page.getByRole('radio').nth(0)
    expect(lightModeButton).toHaveAttribute('aria-checked', 'true')
  })

  it('color-scheme on :root element should be light', async () => {
    const newColorScheme = document.documentElement.dataset.colorScheme
    expect(newColorScheme).toBe('light')
  })

  it('it should accept a custom className', async () => {
    expect(page.getByRole('radiogroup')).toHaveClass(
      Primary.args.className as string,
    )
  })
})

describe('given a ColorSchemeSwitch with onSchemeChange', () => {
  it('should call onSchemeChange with the selected scheme', async () => {
    const onSchemeChange = vi.fn()
    await render(<ColorSchemeSwitch onSchemeChange={onSchemeChange} />)
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    expect(onSchemeChange).toHaveBeenCalledWith('light')
  })
})
