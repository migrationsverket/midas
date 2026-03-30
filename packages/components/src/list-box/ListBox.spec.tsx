import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ListBox.stories'
import { render } from '../../test-utils'

const { SelectionModeSingle } = composeStories(stories)

describe('given a ListBoxItem in a ListBox with selectionMode="single"', async () => {
  it('should change cursor on hover', async () => {
    const { getByRole } = await render(<SelectionModeSingle />)
    const firstOption = getByRole('option').first()
    await firstOption.hover()
    await expect.element(firstOption).toHaveStyle({ cursor: 'pointer' })
  })

  it('should set data-pressed on the item while being pressed', async () => {
    const { getByRole } = await render(<SelectionModeSingle />)
    const firstOption = getByRole('option').first()
    const el = firstOption.element()!

    let pressedAtSomePoint = false
    const observer = new MutationObserver(() => {
      if (el.hasAttribute('data-pressed')) pressedAtSomePoint = true
    })
    observer.observe(el, { attributes: true, attributeFilter: ['data-pressed'] })

    await firstOption.click()
    observer.disconnect()

    expect(pressedAtSomePoint).toBe(true)
  })
})
