import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Children } from 'react'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
  },
  argTypes: {
    children: { name: 'label' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary = {
  args: {
    children: 'Button',
  },
  parameters: {},
}

export const Secondary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
}

export const DisabledButton: Story = {
  args: { variant: 'primary' },
  render: (args, context) => (
    <Button
      {...args}
      isDisabled
    >
      Button
    </Button>
  ),
}

export const SecondaryDisabled: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'secondary',
    isDisabled: true,
  },
}

export const Size = {
  args: {
    children: 'Button',
    size: 'small',
  },
  parameters: {},
}

export const Fullwidth = {
  args: {
    children: 'Button',
    fullwidth: true,
  },
  parameters: {},
}