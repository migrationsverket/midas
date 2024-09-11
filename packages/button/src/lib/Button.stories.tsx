import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

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
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['small', null],
      control: { type: 'radio' },
      defaultValue: null,
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

export const Tertiary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'tertiary',
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
