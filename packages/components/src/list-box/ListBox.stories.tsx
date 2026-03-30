import type { Meta, StoryObj } from '@storybook/react-vite'
import { type Fruit, fruit } from '@midas-ds/test-utils'
import { ListBox } from './ListBox'
import { ListBoxItem } from './ListBoxItem'

type Story = StoryObj<typeof ListBox<Fruit>>

export default {
  component: ListBox,
  subcomponents: { ListBoxItem },
  tags: ['autodocs'],
  title: 'Internal/ListBox',
  parameters: { layout: 'fullscreen' },
  args: {
    'aria-label': 'fruit',
    children: item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>,
    items: fruit,
  },
} satisfies Meta<typeof ListBox<Fruit>>

export const SelectionModeSingle: Story = {
  args: {
    selectionMode: 'single',
  },
}
