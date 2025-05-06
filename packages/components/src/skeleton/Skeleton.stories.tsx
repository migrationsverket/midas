import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  args: {
    variant: 'rectangular',
  },
  argTypes: {
    variant: {
      options: ['rectangular', 'circle', 'rectangle'],
      control: { type: 'radio' },
    },
    width: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
    animation: {
      options: ['wave', false],
      control: { type: 'radio' },
      defaultValue: false,
    },
  },
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
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

export const NoAnimation: Story = {
  args: {
    ...Rectangular.args,
    animation: false,
  },
}

export const Wave: Story = {
  args: {
    ...Rectangular.args,
    animation: 'wave',
  },
}
