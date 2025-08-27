import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Plus, X } from 'lucide-react'
import { expect, userEvent } from 'storybook/test'

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
  args: { variant: 'primary', isDisabled: true, children: 'Lägg till' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    await expect(button).toBeDisabled()
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    isDisabled: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    await expect(button).toBeDisabled()
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

export const Tests: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    children: 'Button',
    className: 'test-class',
  },
  play: async ({ canvas, step }) => {
    await step('it should have focus when clicked', async () => {
      const button = canvas.getByRole('button')
      await userEvent.click(button)
      await expect(button).toBeEnabled()
      button.focus()
      await userEvent.keyboard('{Enter}')
      await expect(button).toHaveFocus()
    })
  },
}
