import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  args: {
    variant: 'rectangle',
  },
  argTypes: {
    variant: {
      options: ['circle', 'rectangle', 'rectangular'],
      control: { type: 'radio' },
    },
    width: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
    animation: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false,
    },
  },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Rectangle: Story = {
  args: {
    variant: 'rectangle',
    width: '100px',
    height: '40px',
  },
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '50px',
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px',
  },
}

export const NoAnimation: Story = {
  args: {
    ...Rectangle.args,
    animation: false,
  },
}

export const Animation: Story = {
  args: {
    ...Rectangle.args,
    isAnimated: true,
  },
}

export const Wave: Story = {
  args: {
    ...Rectangle.args,
    animation: 'wave',
  },
}
