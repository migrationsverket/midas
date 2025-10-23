import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  ListBoxItem,
  ListBoxSection,
  ListBoxHeader,
  SelectionMode,
} from '@midas-ds/components'
import { RunOptions } from 'axe-core'
import { options, optionsWithSections } from '../utils/storybook'
import { useState } from 'react'
import { Collection, type Key } from 'react-aria-components'

type Story<
  T extends object = Item,
  M extends SelectionMode = 'single',
> = StoryObj<typeof Select<T, M>>

type Item = (typeof options)[0]
type Section = (typeof optionsWithSections)[0]

export default {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    children: item => <ListBoxItem {...item}>{item.name}</ListBoxItem>,
    description: 'Description',
    isDisabled: false,
    isSelectableAll: false,
    label: 'Label',
    items: options,
    placeholder: 'Select an option',
    selectionMode: 'single',
    showTags: false,
    errorPosition: 'top',
    size: 'large',
  },
} satisfies Meta<typeof Select<Item>>

export const StaticItems: Story = {
  args: {
    label: 'label',
    description: 'static',
    children: (
      <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
    ),
  },
}

export const Primary: Story = {}

export const DefaultValue: Story<Item, 'multiple'> = {
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple',
  },
}

export const AllKeysSelected: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({ id }) => id),
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled',
      },
    },
    a11y: {
      context: 'body',
      config: {
        rules: [
          {
            // Dont check for color contrast on disabled elements
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      } satisfies RunOptions,
    },
  },
  args: {
    isDisabled: true,
  },
}

export const DisabledOption: Story = {
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi'],
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Error msg',
  },
}

export const WithTags: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi'],
  },
}

export const SelectAllEnabled: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true,
  },
}

export const DS872: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Primary.args,
    selectionMode: 'single',
    label: 'Ärende',
    placeholder: 'Välj ärende',
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null)

    return (
      <Select
        {...args}
        value={selectedKey}
        onChange={setSelectedKey}
        items={[
          { id: '12', name: 'tolv' },
          { id: '1', name: 'ett' },
          { id: '2', name: 'två' },
        ]}
      />
    )
  },
}

export const StaticSections: Story = {
  args: {
    children: (
      <>
        <ListBoxSection>
          <ListBoxHeader>Fruit</ListBoxHeader>
          <ListBoxItem id='Apple'>Apple</ListBoxItem>
          <ListBoxItem id='Banana'>Banana</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
          <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
        </ListBoxSection>
      </>
    ),
  },
}

export const DynamicSections: Story<Section> = {
  args: {
    ...Primary.args,
    items: optionsWithSections,
    children: section => (
      <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
    ),
  },
}

export const RequiredSingleSelect: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    selectionMode: 'single',
    isRequired: true,
  },
  render: args => (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
  ),
}
