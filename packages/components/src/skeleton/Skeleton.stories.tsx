import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['text', 'circle', 'rectangular'],
      control: { type: 'radio' }
    },
    width: {
      type: 'string'
    },
    height:{
      type: 'string'
    },
    animation:{
      options: ['wave', 'pulse', false],
      control: { type: 'radio' }
    }
  }
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
    height: '30px',
  }
}
export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}
export const NoAnimation: Story = {
  args: {
    variant: 'text',
    animation: false
  }
}
export const Pulse: Story = {
  args: {
    variant: 'text',
    animation: 'pulse'
  }
}
