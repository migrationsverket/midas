import { describe, expect, it, vi, afterEach } from 'vitest'
import { MenuTrigger } from 'react-aria-components'
import { MenuIcon } from 'lucide-react'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'
import { Button } from '../button'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { MenuPopover } from './MenuPopover'

const handleAction = vi.fn()

afterEach(() => {
  vi.resetAllMocks()
})

describe('given a primary Menu', async () => {
  it('should accept a custom className', async () => {
    render(
      <MenuTrigger defaultOpen>
        <Button aria-label='Menu' variant='icon'>
          <MenuIcon size={20} />
        </Button>
        <MenuPopover>
          <Menu className='test-class'>
            <MenuItem id='item'>Item</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>,
    )

    await expect.element(page.getByRole('menu')).toHaveClass('test-class')
  })

  it('should call the onAction handler with the ID of the menu item', async () => {
    render(
      <MenuTrigger defaultOpen>
        <Button aria-label='Menu' variant='icon'>
          <MenuIcon size={20} />
        </Button>
        <MenuPopover>
          <Menu onAction={handleAction}>
            <MenuItem id='testID'>test 2</MenuItem>
          </Menu>
        </MenuPopover>
      </MenuTrigger>,
    )

    await page.getByText('test 2').click()
    expect(handleAction).toHaveBeenCalledWith('testID')
  })
})
