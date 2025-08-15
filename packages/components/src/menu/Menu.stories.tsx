import type { Meta, StoryObj } from '@storybook/react'
import { MenuTrigger, Popover, SubmenuTrigger } from 'react-aria-components'
import { HamburgerIcon, MenuIcon } from 'lucide-react'
import { Button } from '../button'
import { Menu, MenuItem } from '.'

type Story = StoryObj<typeof Menu>

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    MenuItem: MenuItem as React.ComponentType<unknown>,
  },
  render: args => (
    <MenuTrigger>
      <Button
        aria-label='Menu'
        variant='icon'
      >
        <MenuIcon size={20} />
      </Button>
      <Popover>
        <Menu {...args}>
          <MenuItem isDisabled>Open</MenuItem>
          <MenuItem>
            <HamburgerIcon size={16} />
            Rename…
          </MenuItem>
          <MenuItem>Duplicate</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Share</MenuItem>
            <Popover>
              <Menu>
                <MenuItem>SMS</MenuItem>
                <MenuItem>X</MenuItem>
                <SubmenuTrigger>
                  <MenuItem>Email</MenuItem>
                  <Popover>
                    <Menu>
                      <MenuItem>Work</MenuItem>
                      <MenuItem>Personal</MenuItem>
                    </Menu>
                  </Popover>
                </SubmenuTrigger>
              </Menu>
            </Popover>
          </SubmenuTrigger>
        </Menu>
      </Popover>
    </MenuTrigger>
  ),
} satisfies Meta<typeof Menu>

export const Primary: Story = {}
