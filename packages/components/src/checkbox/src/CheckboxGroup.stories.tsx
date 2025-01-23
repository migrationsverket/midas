import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from 'packages/components/src/checkbox/src/CheckboxGroup'
import React from 'react'

const meta: Meta<typeof CheckboxGroup> = {
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
  },
  argTypes: {
    isInvalid: { type: 'boolean' },
    isDisabled: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
    errorMessage: { type: 'string' },
  },
  tags: ['autodocs'],
}

const ITEMS = ['Banan', 'Apple', 'Mango']

export default meta

type Story = StoryObj<typeof CheckboxGroup>

const CheckboxGroupTemplate: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        {ITEMS.map((item: string) => (
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
}

export const Example: Story = {
  ...CheckboxGroupTemplate,
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'här gick det snett',
  },
}

export const SelectAll: Story = {
  ...CheckboxGroupTemplate,
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'här gick det snett',
    showSelectAll: true,
  },
}
