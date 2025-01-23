import type { Meta, StoryObj } from '@storybook/react'
import { Select, Item } from 'packages/components/src/select/src/Select'
import React from 'react'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning'
  },
  argTypes: {
    placeholder: { type: 'string' }
  },
  parameters: {}
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

export const Default: Story = {
  args: {
    placeholder: 'Many items...'
  },
  render: () => (
    <Select
      label='Välj en frukt'
      items={options}
    >
      {item => <Item>{item.name}</Item>}
    </Select>
  )
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!'
  },
  render: args => (
    <Select {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Select>
  )
}

export const disabled: Story = {
  args: {
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    }
  },
  render: args => (
    <Select {...args}>
      <Item>Hej</Item>
    </Select>
  )
}
