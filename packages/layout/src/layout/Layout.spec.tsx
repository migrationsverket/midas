import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import * as stories from './Layout.stories'

const { Primary } = composeStories(stories)

describe('given a primary Layout', async () => {
  it('should render', async () => {
    const { getByText } = await render(<Primary />)

    await expect.element(getByText('Content')).toBeVisible()
  })
})
