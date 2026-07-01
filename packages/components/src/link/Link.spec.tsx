import { afterEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Link.stories'
import { render } from '../../test-utils'
import { userEvent } from 'vitest/browser'

const { PrimaryDisabled, ExternalLink } = composeStories(stories)

describe('given a link that opens in a new tab', async () => {
  it('should include visually hidden text for the new tab icon', async () => {
    const { getByText } = await render(<ExternalLink />)
    expect(getByText('Opens in new tab')).toBeDefined()
  })

  it('should hide the icon from the accessibility tree', async () => {
    const { container } = await render(<ExternalLink />)
    const icon = container.querySelector('svg')
    expect(icon?.getAttribute('aria-hidden')).toBe('true')
  })
})

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
