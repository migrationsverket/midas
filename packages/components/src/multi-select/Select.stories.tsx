import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/NEWMultiSelect',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Select>

const fruits = [
  'Apple',
  'Banana',
  'Kiwi',
  'Elderflower',
  'Nectarine',
  'Watermelon',
  'Pineapple',
  'Apricot',
  'Cloudberry',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Cherry',
  'Peach',
  'Plum',
  'Grape',
  'Orange',
  'Lemon',
  'Lime',
  'Coconut',
  'Fig',
  'Papaya',
  'Guava',
  'Pomegranate',
  'Dragonfruit',
  'Starfruit',
  'Passionfruit'
]

const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})

export const Normal: Story = {
  args: {
    label: 'Label',
    selectionMode: 'single',
    options: options,
    isDisabled: false,
    isClearable: true,
    isSelectableAll: false,
    description: 'Description',
    showTags: false,
    placeholder: 'Select an option',
  }
}

export const DefaultSelectedKey: Story = {
  args: {
    ...Normal.args,
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  }
}

export const AllKeysSelected: Story = {
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all',
  }
}

export const Disabled: Story = {
  args: {
    ...Normal.args,
    isDisabled: true,
  }
}
export const DisabledOption: Story = {
  args: {
    ...Normal.args,
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi'],
  }
}
/** TODO! */
export const Invalid: Story = {
  args: {
    ...Normal.args,
  }
}
export const WithTags: Story = {
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple','kiwi']
  }
}
export const SelectAllEnabled: Story = {
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isSelectableAll: true,
  }
}
