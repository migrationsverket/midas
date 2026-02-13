import { describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Card.stories'
import { render } from 'vitest-browser-react'

const { WithActions, WithPrimaryAction, WithLink } = composeStories(stories)

describe('given a Card with Actions', async () => {
  it('should be possible to focus the button', async () => {
    const { getByRole } = await render(<WithActions />)
    const button = getByRole('button').last()

    await page.getByText('Namn: Namn Namnsson').click()
    await expect.element(button).not.toHaveFocus()

    await userEvent.tab()
    await userEvent.tab()

    await expect.element(button).toHaveFocus()
  })
})

describe('given a Card with a primary action', async () => {
  it('should be possible to focus the primary action area', async () => {
    const { getByRole } = await render(<WithPrimaryAction />)
    const primaryAction = getByRole('button').first()
    const lastButton = getByRole('button').last()

    await lastButton.click()
    await expect.element(primaryAction).not.toHaveFocus()

    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })

    await expect.element(primaryAction).toHaveFocus()
  })
})

describe('given a Card with a Link', async () => {
  it('should be possible to focus the link', async () => {
    const { getByRole } = await render(<WithLink />)
    const link = getByRole('link')

    await link.click()
    await expect.element(link).toHaveFocus()
  })
})
