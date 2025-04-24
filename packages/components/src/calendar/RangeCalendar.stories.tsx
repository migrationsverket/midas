import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from './RangeCalendar'

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
} as Meta<typeof RangeCalendar>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
