import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './LinkButton.stories'
import { render } from 'vitest-browser-react'

const { Disabled } = composeStories(stories)

describe('given a disabled LinkButton', async () => {
  it('should have cursor not allowed when disabled', async () => {
    const { getByRole } = await render(<Disabled />)
    const link = getByRole('link')

    await link.hover()

    await expect.element(link).toHaveStyle({ cursor: 'not-allowed' })
  })
})
