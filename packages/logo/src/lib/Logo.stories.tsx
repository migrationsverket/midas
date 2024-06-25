import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {}

export const Dark: Story = {
  args: {
    primary: false,
  },
}

export const BackgroundPrimary: Story = {
  args: {
    background: true,
  },
}

export const BackgroundDark: Story = {
  args: {
    primary: false,
    background: true,
  },
}
