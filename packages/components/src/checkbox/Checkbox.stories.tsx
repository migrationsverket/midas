import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { Checkbox } from './Checkbox'

type Story = StoryObj<typeof Checkbox>

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isDisabled: false,
    isIndeterminate: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    value: 'unsubscribe',
    children: 'Unsubscribe',
  },
} satisfies Meta<typeof Checkbox>

export const Example: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
}

export const Selected: Story = {
  args: {
    isSelected: true,
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ ...args }) => {
    return (
      <form>
        <Checkbox
          value='unsubscribe'
          {...args}
        >
          Unsubscribe
        </Checkbox>
        <button type='submit'>submit</button>
      </form>
    )
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should be (aria) invalid if the user submitted without checking the box',
      async () => {
        const checkbox = canvas.getByLabelText('Unsubscribe')
        await userEvent.click(checkbox)
        await userEvent.click(checkbox)
        expect(checkbox).toBeInvalid()
      },
    )
  },
}
