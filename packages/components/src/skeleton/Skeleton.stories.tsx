import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['rectangular', 'circle'],
      control: { type: 'radio' }
    },
    width: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    animation: {
      options: [false, 'wave'],
      control: { type: 'radio' }
    }
  }
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '50px',
    height: '50px'
  }
}

export const NoAnimation: Story = {
  args: {
    ...Rectangular.args
  }
}

export const Wave: Story = {
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}
