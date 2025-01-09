import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import React from 'react'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isInvalid: false,
    isSelected: false,
    isIndeterminate: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
  },
  argTypes: {
    isInvalid: { type: 'boolean' },
    isSelected: { type: 'boolean' },
    isIndeterminate: { type: 'boolean' },
    isDisabled: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Example: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <Checkbox
        value="unsubscribe"
        {...args}
      >
        Unsubscribe
      </Checkbox>
    )
  },
}
