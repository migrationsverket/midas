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
import React from 'react'
import { Menu, type MenuProps } from './Menu'
import { MenuItem } from './MenuItem'
import { Button } from '../button'
import { MenuPopover } from './MenuPopover'
import { Text } from '../text'
import { MenuSection } from './MenuSection'
import { Separator } from './Separator'

interface Item {
  id: string | number
  name: string
  children?: Item[]
  [prop: string]: unknown
}

type Story = StoryObj<typeof Menu<Item>>

const renderMenu = <T extends object>(
  args: MenuProps<T>,
  defaultOpen = false,
) => (
  <MenuTrigger defaultOpen={defaultOpen}>
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
)

/**
 * Snapshot-only copy of a story with the menu open, since the visual tests
 * don't click the trigger. Hidden from the sidebar and docs. The screenshot is
 * cropped to the story's own element, so it's made tall enough for the menu
 */
const open = (story: Story): Story => ({
  ...story,
  tags: ['!dev', '!autodocs'],
  render: args => (
    <div style={{ minHeight: '25rem' }}>{renderMenu(args, true)}</div>
  ),
})

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    MenuItem,
  },
  render: args => renderMenu(args),
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

export const PrimaryOpen = open(Primary)

export const SectionsOpen = open(Sections)

export const SeparatorsOpen = open(Separators)

export const TextSlotsOpen = open(TextSlots)

export const MultiSelectWithDescriptionsOpen = open(MultiSelectWithDescriptions)

export const DisabledItemsOpen = open(DisabledItems)

export const SubMenusOpen = open(SubMenus)
