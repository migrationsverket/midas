import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'text',
        'circle',
        'rectangular',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
      ],
      control: { type: 'radio' }
    },
    width: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    animation: {
      options: [false, 'pulse', 'wave'],
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
    height: '40px'
  }
}
export const Headings: Story = {
  render: () => (
    <div>
      <Skeleton
        variant='h1'
        width='50%'
      />
      <Skeleton
        variant='h2'
        width='60%'
      />
      <Skeleton
        variant='h3'
        width='70%'
      />
      <Skeleton
        variant='h4'
        width='80%'
      />
      <Skeleton
        variant='h5'
        width='90%'
      />
      <Skeleton
        variant='h6'
        width='100%'
      />
    </div>
  )
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
    variant: 'text'
  }
}
export const Pulse: Story = {
  args: {
    variant: 'text',
    animation: 'pulse'
  }
}
export const Wave: Story = {
  args: {
    variant: 'text',
    animation: 'wave'
  }
}
