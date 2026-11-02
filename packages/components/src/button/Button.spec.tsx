import { describe, expect, it, vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import { ButtonContext as AriaButtonContext } from 'react-aria-components'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Button.stories'
import { render } from '../../test-utils'
import { Button } from './Button'

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

describe("given a Button inside React Aria's ButtonContext", async () => {
  it('should call onPress from context once', async () => {
    const onPress = vi.fn()
    const { getByRole } = await render(
      <AriaButtonContext.Provider value={{ onPress }}>
        <Button>Knapp</Button>
      </AriaButtonContext.Provider>,
    )
    await userEvent.click(getByRole('button'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
