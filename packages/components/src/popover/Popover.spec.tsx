import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Popover.stories'
import { render } from '../../test-utils'
import styles from './Popover.module.css'
import { Popover } from './Popover'
import { DialogTrigger } from '../modal'
import { Pressable } from '../aria'

const { Primary } = composeStories(stories)

describe('given a Popover', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary className='test' />)

    await userEvent.click(getByRole('button'))

    await expect
      .element(getByRole('dialog'))
      .toHaveClass(styles.popover, 'test')
  })

  it('should support a function as children', async () => {
    const { getByRole } = await render(
      <Primary>
        {({ placement, trigger }) => (
          <>
            I was triggered by a {trigger} and my placement is {placement}!
          </>
        )}
      </Primary>,
    )

    await userEvent.click(getByRole('button'))

    await expect
      .element(getByRole('dialog'))
      .toHaveTextContent(
        'I was triggered by a DialogTrigger and my placement is bottom!',
      )
  })
})

describe('given a DialogTrigger with a Pressable trigger', async () => {
  it('should open the popover when the trigger is pressed', async () => {
    const { getByRole } = await render(
      <DialogTrigger>
        <Pressable>
          <span role='button'>Trigger</span>
        </Pressable>
        <Popover>Popover</Popover>
      </DialogTrigger>,
    )

    await userEvent.click(getByRole('button'))

    await expect.element(getByRole('dialog')).toHaveTextContent('Popover')
  })
})
