import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Plus, X } from 'lucide-react'
import { expect, userEvent } from '@storybook/test'

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
      options: ['large', 'medium', 'small'],
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

export const Primary: Story = {
  args: {
    children: 'Button',
  },
  parameters: {},
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(button).toBeEnabled()
    button.focus()
    await userEvent.keyboard('{Enter}')
    expect(button).toHaveFocus()
  },
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
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(button).toBeDisabled()
  },
}

export const SecondaryDisabled: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    variant: 'secondary',
    isDisabled: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(button).toBeDisabled()
  },
}

export const MediumSize = {
  args: {
    children: 'Button',
    size: 'medium',
  },
  parameters: {},
}

export const SmallPrimary = {
  args: {
    children: 'Button',
    size: 'small',
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
