import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from './RangeCalendar'

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof RangeCalendar>

export const Primary: Story = {
  args: {},
}
