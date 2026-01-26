import { afterEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Link.stories'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'

const { PrimaryDisabled } = composeStories(stories)

describe('given a disabled link', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should not be pressable', async () => {
    const handleClick = vi.fn()
    await render(<PrimaryDisabled onPress={handleClick} />)

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handleClick).not.toHaveBeenCalled()
  })
})
