import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Collection,
  Header,
  Keyboard,
  MenuTrigger,
  SubmenuTrigger,
  type Selection,
} from 'react-aria-components'
import { MenuIcon } from 'lucide-react'
import { Button } from '../button'
import { Menu, MenuItem, MenuPopover, MenuSection, Separator } from '.'
import React from 'react'
import { Text } from '../text'
import { expect, fn, userEvent, within } from 'storybook/test'

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
        size={args.size}
      >
        <MenuIcon size={20} />
      </Button>
      <MenuPopover>
        <Menu {...args} />
      </MenuPopover>
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
            size={args.size}
          >
            <MenuIcon size={20} />
          </Button>
          <MenuPopover>
            <Menu
              {...args}
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <MenuItem id='left'>Left</MenuItem>
              <MenuItem id='center'>Center</MenuItem>
              <MenuItem id='right'>Right</MenuItem>
            </Menu>
          </MenuPopover>
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
            size={args.size}
          >
            <MenuIcon size={20} />
          </Button>
          <MenuPopover>
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
          </MenuPopover>
        </MenuTrigger>
        <Text>
          Current selection (controlled):
          {selected === 'all' ? 'all' : [...selected].join(', ')}
        </Text>
      </>
    )
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

export const Separators: Story = {
  args: {
    children: (
      <>
        <MenuItem>New…</MenuItem>
        <MenuItem>Open…</MenuItem>
        <Separator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <Separator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </>
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

export const MultiSelectWithDescriptions: Story = {
  args: {
    selectionMode: 'multiple',
    children: (
      <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
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
      { id: '0', name: 'Menu item' },
      { id: '1', name: 'Menu item' },
      { id: '2', name: 'Menu item' },
      {
        id: '3',
        name: 'Sub menu',
        children: [
          { id: '31', name: 'Sub menu item' },
          { id: '32', name: 'Sub menu item' },
          { id: '33', name: 'Sub menu item' },
        ],
      },
      { id: '4', name: 'Other menu item' },
    ],
    children: function renderSubmenu(item) {
      return item.children ? (
        <SubmenuTrigger>
          <MenuItem key={item.name}>{item.name}</MenuItem>
          <MenuPopover>
            <Menu items={item.children}>{item => renderSubmenu(item)}</Menu>
          </MenuPopover>
        </SubmenuTrigger>
      ) : (
        <MenuItem key={item.name}>{item.name}</MenuItem>
      )
    },
  },
}

export const Tests: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    items: [
      { id: 0, name: 'test 0' },
      { id: 1, name: 'test 1' },
      { id: 'testID', name: 'test 2' },
      { id: 3, name: 'test 3' },
    ],
    onAction: fn(),
    className: 'derp',
  },
  play: async ({ canvasElement, step, args }) => {
    await step('Open menu', async () => {
      await userEvent.tab()
      await userEvent.keyboard('[Space]')
    })

    await step('it should accept a custom className', async () => {
      await expect(
        within(canvasElement.ownerDocument.body).getByRole('menu'),
      ).toHaveClass('derp')
    })

    await step('Select the third item', async () => {
      await userEvent.keyboard('[ArrowDown]')
      await userEvent.keyboard('[ArrowDown]')
      await userEvent.keyboard('[Space]')
    })

    await step(
      'it should call the onAction handler with the ID of the menu item',
      async () => {
        await expect(args.onAction).toHaveBeenCalledWith('testID')
      },
    )
  },
}
