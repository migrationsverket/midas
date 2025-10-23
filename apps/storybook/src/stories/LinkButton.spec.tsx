import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './LinkButton.stories'

const { Disabled } = composeStories(stories)

describe('given a disabled LinkButton', async () => {
  beforeEach(async () => {
    await Disabled.run()
  })

  it('should have cursor not allowed when disabled', async () => {
    const linkButton = page.getByRole('link')
    await userEvent.hover(linkButton)
    expect(linkButton).toHaveStyle({ cursor: 'not-allowed' })
  })
})
