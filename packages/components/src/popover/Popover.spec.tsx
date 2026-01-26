import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Popover.stories'
import { render } from 'vitest-browser-react'
import styles from './Popover.module.css'

const { Primary } = composeStories(stories)

describe('given a Popover', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary className='test' />)

    await userEvent.click(getByRole('button'))

    await expect
      .element(getByRole('dialog'))
      .toHaveClass(styles.popover, 'test')
  })
})
