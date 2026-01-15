import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Label.stories'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a primary Label', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Primary />)

    await expect
      .element(getByText(Primary.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '500',
      })
  })
})
