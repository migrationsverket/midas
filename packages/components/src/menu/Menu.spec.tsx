import { describe, expect, it, beforeEach, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Menu.stories'
import { page } from 'vitest/browser'
import { render } from '../../test-utils'

const { Primary } = composeStories(stories)

const handleAction = vi.fn()

describe('given a primary Menu', async () => {
  beforeEach(async () => {
    const { getByRole } = await render(
      <Primary
        onAction={handleAction}
        className='test-class'
        items={[
          { id: 0, name: 'test 0' },
          { id: 1, name: 'test 1' },
          { id: 'testID', name: 'test 2' },
          { id: 3, name: 'test 3' },
        ]}
      />,
    )

    // open menu
    await getByRole('button').click()
  })

  it('should accept a custom className', async () => {
    await expect.element(page.getByRole('menu')).toHaveClass('test-class')
  })

  it('should call the onAction handler with the ID of the menu item', async () => {
    await page.getByText('test 2').click()
    expect(handleAction).toHaveBeenCalledWith('testID')
  })
})
