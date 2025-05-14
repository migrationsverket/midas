import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Plus, X } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
  },
  argTypes: {
    children: { type: 'string' },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'icon'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    size: {
      options: ['large', 'medium'],
      control: { type: 'radio' },
      defaultValue: 'large',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    iconPlacement: {
      options: ['right', 'left'],
      control: { type: 'radio' },
      defaultValue: 'left',
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

export const TertiaryWithIcon: Story = {
  args: {
    children: 'Lägg till',
    variant: 'tertiary',
    icon: Plus,
  },
}
export const PrimaryDisabled: Story = {
  args: { variant: 'primary', isDisabled: true, children: 'Lägg till' },
}

export const SecondaryDisabled: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'secondary',
    isDisabled: true,
  },
}

export const MediumSize = {
  args: {
    children: 'Button',
    size: 'medium',
  },
  parameters: {},
}

export const PrimaryFullwidth = {
  args: {
    children: 'Button',
    fullwidth: true,
  },
  parameters: {},
}

export const Icon = {
  args: {
    children: (
      <X
        size={20}
        aria-hidden
      />
    ),
    variant: 'icon',
    'aria-label': 'Stäng',
  },
}

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
  },
}
