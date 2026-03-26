import { describe, expect, it, vi, afterEach } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { User } from '@react-aria/test-utils'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Menu.stories'
import { render } from '../../test-utils'

const { Primary } = composeStories(stories)

const handleAction = vi.fn()

afterEach(() => {
  vi.resetAllMocks()
})

// --- existing tests (unchanged) ---

describe('given a primary Menu', async () => {
  it('should accept a custom className', async () => {
    await render(<Primary className='test-class' />)

    await userEvent.click(page.getByRole('button', { name: 'Menu' }))
    await expect.element(page.getByRole('menu')).toHaveClass('test-class')
  })

  it('should call the onAction handler with the ID of the menu item', async () => {
    await render(<Primary onAction={handleAction} />)

    await userEvent.click(page.getByRole('button', { name: 'Menu' }))
    await page.getByRole('menuitem', { name: 'Open' }).click()
    expect(handleAction).toHaveBeenCalledWith(0)
  })
})

// --- @react-aria/test-utils experiment ---

const renderMenu = async (props = {}) => {
  await render(<Primary onAction={handleAction} {...props} />)

  const trigger = page.getByRole('button', { name: 'Menu' })
  await expect.element(trigger).toBeInTheDocument()

  const user = new User({ interactionType: 'mouse' })
  const menuTester = user.createTester('Menu', {
    root: trigger.element() as HTMLElement,
  })

  return { menuTester }
}

describe('given a Menu [RAC test-utils experiment]', async () => {
  it('should open when the trigger is clicked', async () => {
    const { menuTester } = await renderMenu()
    await menuTester.open()
    await expect.element(page.getByRole('menu')).toBeVisible()
  })

  it('should select an item by text and call onAction', async () => {
    const { menuTester } = await renderMenu()
    await menuTester.open()
    await menuTester.selectOption({ option: 'Open' })
    expect(handleAction).toHaveBeenCalledWith(0)
  })

  it('should select an item by index and call onAction', async () => {
    const { menuTester } = await renderMenu()
    await menuTester.open()
    await menuTester.selectOption({ option: 1 })
    expect(handleAction).toHaveBeenCalledWith(1)
  })

  it('should close after selecting an item', async () => {
    const { menuTester } = await renderMenu()
    await menuTester.open()
    await menuTester.selectOption({ option: 'Delete...' })
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument()
  })

  it('should be operable by keyboard', async () => {
    const { menuTester } = await renderMenu()
    await menuTester.open()
    await menuTester.selectOption({ option: 'Open', interactionType: 'keyboard' })
    expect(handleAction).toHaveBeenCalledWith(0)
  })
})
