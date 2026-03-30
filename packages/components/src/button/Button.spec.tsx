import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Button.stories'
import { render } from '../../test-utils'
import { page, userEvent } from 'vitest/browser'

const { Primary, Secondary, Inactive } = composeStories(stories)

const handlePress = vi.fn()
const handlePressChange = vi.fn()
const handlePressEnd = vi.fn()
const handlePressStart = vi.fn()
const handlePressUp = vi.fn()

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

describe('given an inactive Button', async () => {
  beforeEach(async () => {
    await render(
      <Inactive
        onPress={handlePress}
        onPressChange={handlePressChange}
        onPressEnd={handlePressEnd}
        onPressStart={handlePressStart}
        onPressUp={handlePressUp}
      />,
    )
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should show a tooltip on hover', async () => {
    await page.getByRole('button').hover()
    await expect.element(page.getByRole('tooltip')).toBeVisible()
  })

  it('should not fire any onPress event', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handlePress).toHaveBeenCalledTimes(0)
    expect(handlePressChange).toHaveBeenCalledTimes(0)
    expect(handlePressEnd).toHaveBeenCalledTimes(0)
    expect(handlePressStart).toHaveBeenCalledTimes(0)
    expect(handlePressUp).toHaveBeenCalledTimes(0)
  })
})
