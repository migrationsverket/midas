import type { Meta, StoryObj } from '@storybook/react-vite'
import { type Fruit, fruit, optionsWithSections } from '@midas-ds/test-utils'
import { ListBox } from './ListBox'
import { ListBoxItem } from './ListBoxItem'
import { ListBoxSection } from './ListBoxSection'
import { ListBoxHeader } from './ListBoxHeader'
import { Collection } from 'react-aria-components'

type Story<T extends object = Fruit> = StoryObj<typeof ListBox<T>>

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

export const Sectioned: Story<(typeof optionsWithSections)[0]> = {
  args: {
    items: optionsWithSections,
    children: section => (
      <ListBoxSection id={section.name}>
        <ListBoxHeader>
          {section.name + ' and a long string for testing purposes'}
        </ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
    ),
  },
}

export const NotVirtualized: Story = {
  tags: ['!autodocs', '!snapshot'],
  args: {
    virtualized: false,
  },
  render: args => (
    <ListBox<Fruit>
      {...args}
      items={undefined}
    >
      <ListBoxSection>
        <ListBoxHeader>Sektion 1</ListBoxHeader>
        <ListBoxItem id='item-1'>Item 1</ListBoxItem>
        <ListBoxItem id='item-2'>Item 2</ListBoxItem>
      </ListBoxSection>
    </ListBox>
  ),
}
