import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Plus, X } from 'lucide-react'
import { expect, userEvent } from '@storybook/test'
import { MidasThemeProvider } from '../theme'

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
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
  },

  play: async ({ canvas, step }) => {
    const button = canvas.getByRole('button')

    await step('it should be large per default', async () => {
      await expect(button).toHaveStyle({ height: '48px' })
    })

    await userEvent.click(button)
    await expect(button).toBeEnabled()
    button.focus()
    await userEvent.keyboard('{Enter}')
    await expect(button).toHaveFocus()
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

export const MediumSize = {
  args: {
    children: 'Button',
    size: 'medium',
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

export const ThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  render: args => (
    <MidasThemeProvider value={{ size: 'medium' }}>
      <Button {...args} />
    </MidasThemeProvider>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should be medium size, as defined by the context',
      async () => {
        await expect(canvas.getByRole('button')).toHaveStyle({ height: '40px' })
      },
    )
  },
}

export const OverrideThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'large',
  },
  render: ThemeProvider.render,
  play: async ({ canvas, step }) => {
    await step(
      'it should be large and override the context, as defined by the component',
      async () => {
        await expect(canvas.getByRole('button')).toHaveStyle({ height: '48px' })
      },
    )
  },
}
