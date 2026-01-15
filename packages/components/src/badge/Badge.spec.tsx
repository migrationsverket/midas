import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import * as stories from './Badge.stories'

const { NoLabel } = composeStories(stories)

describe('given a Badge without a label', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByTestId } = await render(<NoLabel className='test' />)

    await expect.element(getByTestId('badge')).toHaveClass('test')
  })
})
