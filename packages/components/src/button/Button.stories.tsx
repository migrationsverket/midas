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
    size: 'large',
    children: 'Button',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium'],
    },
    children: { type: 'string' },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },

  parameters: {
    chromatic: {
      modes: sizeModes,
    },
  },
  play: async ({ canvas, step, args: { size } }) => {
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

export const TertiarySmall: Story = {
  args: {
    variant: 'tertiary',
    size: 'small',
    children: 'Small Tertiary',
  },
  argTypes: {
    variant: {
      options: ['tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
    },
  },
  play: async ({ canvas, step, args: { size } }) => {
    await step('it should have focus when clicked', async () => {
      const button = canvas.getByRole('button')
      await userEvent.click(button)
      await expect(button).toBeEnabled()
      button.focus()
      await userEvent.keyboard('{Enter}')
      await expect(button).toHaveFocus()
    })
    await step('it should change size according to size prop', async () => {
      const expectedHeight =
        size === 'large'
          ? '48px'
          : size === 'small'
            ? '24px'
            : size === 'medium'
              ? '40px'
              : undefined
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: expectedHeight,
      })
    })
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
