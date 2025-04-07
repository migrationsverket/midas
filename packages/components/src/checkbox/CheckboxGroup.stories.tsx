import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup'

export default {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'här gick det snett',
    errorPosition: 'top',
  },
  argTypes: {
    isInvalid: { type: 'boolean' },
    isDisabled: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
    errorMessage: { type: 'string' },
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        {['Banan', 'Apple', 'Mango'].map((item: string) => (
          <Checkbox
            value={item}
            key={item}
          >
            {item}
          </Checkbox>
        ))}
      </CheckboxGroup>
    )
  },
} as Meta<typeof CheckboxGroup>

type Story = StoryObj<typeof CheckboxGroup>

export const Primary: Story = {}

export const SelectAll: Story = {
  args: {
    showSelectAll: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Du måste välja en av frukterna',
  },
}
