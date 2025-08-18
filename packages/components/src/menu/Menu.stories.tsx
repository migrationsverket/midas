import type { Meta, StoryObj } from '@storybook/react'
import {
  Collection,
  Header,
  Keyboard,
  MenuSection,
  MenuTrigger,
  Popover,
  SubmenuTrigger,
} from 'react-aria-components'
import { MenuIcon } from 'lucide-react'
import { Button } from '../button'
import { Menu, MenuItem } from '.'
import type { Selection } from 'react-aria-components'
import React from 'react'
import { Text } from '../text'

interface Item {
  id: string | number
  name: string
  children?: Item[]
  [prop: string]: unknown
}

type Story = StoryObj<typeof Menu<Item>>

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
        <Menu {...args} />
      </Popover>
    </MenuTrigger>
  ),
  args: {
    children: item => <MenuItem {...item}>{(item as Item).name}</MenuItem>,
    items: [
      { id: 0, name: 'Open' },
      { id: 1, name: 'Rename...' },
      { id: 2, name: 'Duplicate' },
      { id: 3, name: 'Share...' },
      { id: 4, name: 'Delete...' },
    ],
  },
} satisfies Meta<typeof Menu>

export const Primary: Story = {}

export const ControlledSingleSelection: Story = {
  args: {
    selectionMode: 'single',
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(
      new Set(['center']),
    )

    return (
      <>
        <MenuTrigger>
          <Button
            aria-label='Menu'
            variant='icon'
          >
            <MenuIcon size={20} />
          </Button>
          <Popover>
            <Menu
              {...args}
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <MenuItem id='left'>Left</MenuItem>
              <MenuItem id='center'>Center</MenuItem>
              <MenuItem id='right'>Right</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
        <Text>Current selection (controlled): {[...selected].join(', ')}</Text>
      </>
    )
  },
}

export const ControlledMultipleSelection: Story = {
  args: {
    selectionMode: 'multiple',
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(
      new Set(['sidebar', 'console']),
    )

    return (
      <>
        <MenuTrigger>
          <Button
            aria-label='Menu'
            variant='icon'
          >
            <MenuIcon size={20} />
          </Button>
          <Popover>
            <Menu
              {...args}
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <MenuItem id='sidebar'>Sidebar</MenuItem>
              <MenuItem id='searchbar'>Searchbar</MenuItem>
              <MenuItem id='tools'>Tools</MenuItem>
              <MenuItem id='console'>Console</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
        <Text>
          Current selection (controlled):
          {selected === 'all' ? 'all' : [...selected].join(', ')}
        </Text>
      </>
    )
  },
}

export const Links: Story = {
  args: {
    items: [
      { id: 0, href: 'https://adobe.com/', target: '_blank', name: 'Adobe' },
      { id: 1, href: 'https://apple.com/', target: '_blank', name: 'Apple' },
      { id: 2, href: 'https://google.com/', target: '_blank', name: 'Google' },
      {
        id: 3,
        href: 'https://microsoft.com/',
        target: '_blank',
        name: 'Microsoft',
      },
    ],
  },
}

export const Sections: Story = {
  args: {
    items: [
      {
        name: 'Left Panel',
        id: 'left',
        children: [{ id: 1, name: 'Final Copy (1)' }],
      },
      {
        name: 'Right Panel',
        id: 'right',
        children: [
          { id: 2, name: 'index.ts' },
          { id: 3, name: 'package.json' },
          { id: 4, name: 'license.txt' },
        ],
      },
    ],
    children: section => (
      <MenuSection>
        <Header>{section.name}</Header>
        <Collection items={section.children}>
          {item => <MenuItem>{item.name}</MenuItem>}
        </Collection>
      </MenuSection>
    ),
  },
}

export const TextSlots: Story = {
  args: {
    children: (
      <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
          <Keyboard>⌘C</Keyboard>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
          <Keyboard>⌘X</Keyboard>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
          <Keyboard>⌘V</Keyboard>
        </MenuItem>
      </>
    ),
  },
}

export const DisabledItems: Story = {
  args: {
    items: [
      { id: 0, name: 'Copy' },
      { id: 1, name: 'Cut' },
      { id: 2, name: 'Paste', isDisabled: true },
    ],
  },
}

export const SubMenus: Story = {
  args: {
    items: [
      { id: 'cut', name: 'Cut' },
      { id: 'copy', name: 'Copy' },
      { id: 'delete', name: 'Delete' },
      {
        id: 'share',
        name: 'Share',
        children: [
          { id: 'sms', name: 'SMS' },
          { id: 'x', name: 'X' },
          {
            id: 'email',
            name: 'Email',
            children: [
              { id: 'work', name: 'Work' },
              { id: 'personal', name: 'Personal' },
            ],
          },
        ],
      },
    ],
    children: function renderSubmenu(item) {
      return item.children ? (
        <SubmenuTrigger>
          <MenuItem key={item.name}>{item.name}</MenuItem>
          <Popover>
            <Menu items={item.children}>{item => renderSubmenu(item)}</Menu>
          </Popover>
        </SubmenuTrigger>
      ) : (
        <MenuItem key={item.name}>{item.name}</MenuItem>
      )
    },
  },
}
