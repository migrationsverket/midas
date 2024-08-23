import type { Meta, StoryObj } from '@storybook/react'
import { Select, Item } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { type: 'string' },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof Select>
export const Empty: Story = {}

const ITEMS: string[] = []
for (let i = 0; i < 40; i += 1) {
  ITEMS.push(`value ${i}`)
}

const options = [
  { id: 'apple', name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Kiwi' },
  { id: 4, name: 'Elderflower' },
  { id: 5, name: 'Nectarine' },
  { id: 6, name: 'Watermelon' },
  { id: 7, name: 'Pineapple' },
  { id: 8, name: 'Apricot' },
  { id: 9, name: 'Cloudberry' },
]

export const OneItem: Story = {
  args: {
    placeholder: 'One item...',
  },
  render: (args: any) => (
    <Select
      items={{ value: 'value' }}
      {...args}
    >
      <Item value={{ value: 'item' }}>Item A</Item>
    </Select>
  ),
}

export const ManyItems: Story = {
  args: {
    placeholder: 'Many items...',
  },
  render: (args: any) => (
    <Select
      label="Välj en frukt"
      items={options}
    >
      {(item) => <Item>{item.name}</Item>}
    </Select>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
    <Select {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Select>
  ),
}

export const disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled',
      },
    },
  },
  render: (args: any) => (
    <Select {...args}>
      <Item>Hej</Item>
    </Select>
  ),
}
