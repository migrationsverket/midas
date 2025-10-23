import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@midas-ds/components'
import { Plus, X } from 'lucide-react'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'large',
  },
  argTypes: {
    children: { type: 'string' },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    className: 'test-class',
  },
}

export const Secondary: Story = {
  args: {
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
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Lägg till',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    isDisabled: true,
  },
}

export const PrimaryFullwidth = {
  args: {
    children: 'Button',
    fullwidth: true,
  },
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
