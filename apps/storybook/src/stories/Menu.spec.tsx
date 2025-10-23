import { describe, expect, it, beforeEach, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Menu.stories'
import { page, userEvent } from '@vitest/browser/context'

const { Primary } = composeStories(stories)

const onAction = vi.fn()

describe('given a primary Menu', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        items: [
          { id: 0, name: 'test 0' },
          { id: 1, name: 'test 1' },
          { id: 'testID', name: 'test 2' },
          { id: 3, name: 'test 3' },
        ],
        onAction,
        className: 'test-class',
      },
    })

    // open menu
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
  })

  it('should accept a custom className', async () => {
    expect(page.getByRole('menu')).toHaveClass('test-class')
  })

  it('should call the onAction handler with the ID of the menu item', async () => {
    // select the third item
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Space]')

    expect(onAction).toHaveBeenCalledWith('testID')
  })
})
