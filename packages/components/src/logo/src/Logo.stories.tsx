import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from 'packages/components/src/logo/src/Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['x-small', 'small', 'medium', 'large']
    },
    background: {
      control: { type: 'boolean' }
    },
    primary: {
      control: { type: 'boolean' }
    },
    padding: {
      control: { type: 'boolean' }
    }
  }
}
export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {}

export const Dark: Story = {
  args: {
    primary: false
  }
}

export const BackgroundPrimary: Story = {
  args: {
    background: true
  }
}

export const BackgroundDark: Story = {
  args: {
    primary: false,
    background: true
  }
}
