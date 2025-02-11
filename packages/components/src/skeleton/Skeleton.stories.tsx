import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  argTypes: {
    
    variant: {
      options: ["text" ,"circle" , "rectangle"],
      control: { type: 'radio' },
      defaultValue: undefined
    },
}
}
export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    
  },
}
export const Text: Story = {
  args: {
    variant:'text'
  },
}
export const Circle: Story = {
  args: {
    variant:'circle'
  },
}

export const rectangle: Story = {
  args: {
    variant:'rectangle'
  },
}