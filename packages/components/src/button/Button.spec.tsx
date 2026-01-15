import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Button.stories'
import { render } from 'vitest-browser-react'

const { Primary, Secondary } = composeStories(stories)

describe('given a basic Button', async () => {
  it('should have focus when clicked', async () => {
    const { getByRole } = await render(<Primary />)

    const button = getByRole('button')
    await button.click()
    await expect.element(button).toBeEnabled()
    await expect.element(button).toHaveFocus()
  })
})

describe('given a disabled primary Button', async () => {
  it('should be disabled', async () => {
    const { getByRole } = await render(<Primary isDisabled />)

    await expect.element(getByRole('button')).toBeDisabled()
  })
})

describe('given a disabled secondary Button', async () => {
  it('should be disabled', async () => {
    const { getByRole } = await render(<Secondary isDisabled />)

    await expect.element(getByRole('button')).toBeDisabled()
  })
})
