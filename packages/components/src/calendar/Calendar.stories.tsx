import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'

type Story = StoryObj<typeof Calendar>

export default {
  component: Calendar,
  title: 'Components/Calendar',
  tags: ['autodocs'],
} as Meta<typeof Calendar>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
