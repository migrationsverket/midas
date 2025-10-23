import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@midas-ds/components'

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

export const Primary: Story = {
  args: {
    className: 'test-class',
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
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}
