import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Plus, X } from 'lucide-react'
import { expect, userEvent } from '@storybook/test'
import { sizeModes } from '../../.storybook/modes'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    children: 'Button',
  },
  argTypes: {
    children: { type: 'string' },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  render: (args, { globals: { size } }) => {
    return (
      <Button
        {...args}
        size={size}
      />
    )
  },
  parameters: {
    chromatic: {
      modes: sizeModes,
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
  play: async ({ canvas, step, globals: { size } }) => {
    await step('it should have focus when clicked', async () => {
      const button = canvas.getByRole('button')
      await userEvent.click(button)
      await expect(button).toBeEnabled()
      button.focus()
      await userEvent.keyboard('{Enter}')
      await expect(button).toHaveFocus()
    })
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
    })
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
