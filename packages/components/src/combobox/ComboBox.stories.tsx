import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem } from './ComboBox'
import { generateMockOptions } from './utils'
import { Item } from './types'

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof ComboBox>

const options = generateMockOptions(30)

export const Default: Story = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
  },
  render: (args: any) => (
    <ComboBox
      items={options}
      {...args}
    >
      {(item: Item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
    </ComboBox>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
    <ComboBox {...args}>
      <ComboBoxItem>Apple</ComboBoxItem>
      <ComboBoxItem>Lemon</ComboBoxItem>
    </ComboBox>
  ),
}

export const disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args: any) => (
    <ComboBox {...args}>
      <ComboBoxItem>Hej</ComboBoxItem>
    </ComboBox>
  ),
}
