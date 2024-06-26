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

export const OneItem: Story = {
  args: {
    placeholder: 'One item...',
  },
  render: (args: any) => (
    <Select {...args}>
      <Item>Item A</Item>
    </Select>
  ),
}
export const ManyItems: Story = {
  args: {
    placeholder: 'Many items...',
  },
  render: (args: any) => (
    <Select
      placeholder={'Select a fruit...'}
      {...args}
    >
      {ITEMS.map((item, index) => (
        <Item
          key={index}
          value={{ value: item }}
        >
          {item}
        </Item>
      ))}
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
