import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './DateField.stories'
import { render } from 'vitest-browser-react'

const { WithClearButton } = composeStories(stories)

describe('given a clearable DateField ', async () => {
  beforeEach(async () => {
    await render(<WithClearButton />)
  })

  it('should be clearable using the mouse', async () => {
    await page.getByRole('button').first().click()

    const monthSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(monthSelector).toHaveFocus()
    await expect.element(monthSelector).toHaveTextContent('mm')
  })

  it('should be clearable using the keyboard', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    const monthSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(monthSelector).toHaveFocus()
    await expect.element(monthSelector).toHaveTextContent('mm')
  })
})
