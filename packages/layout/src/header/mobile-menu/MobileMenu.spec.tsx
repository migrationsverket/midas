import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './MobileMenu.stories'

const { Primary, Controlled } = composeStories(stories)

describe('given an uncontrolled MobileMenu', async () => {
  it('should be possible to open and close', async () => {
    const { getByRole } = await render(<Primary />)
    await getByRole('button', { name: 'Open menu' }).click()
    const dismissButton = getByRole('button', { name: 'Dismiss' })
    await expect.element(dismissButton).toBeVisible()
    await userEvent.keyboard('[Escape]')
    await expect.element(dismissButton).not.toBeInTheDocument()
  })
})

describe('given a controlled MobileMenu', async () => {
  it('should be possible to open and close', async () => {
    const { getByRole } = await render(<Controlled />)
    await getByRole('button', { name: 'Open menu' }).click()
    const dismissButton = getByRole('button', { name: 'Dismiss' })
    await expect.element(dismissButton).toBeVisible()
    await userEvent.keyboard('[Escape]')
    await expect.element(dismissButton).not.toBeInTheDocument()
  })
})
