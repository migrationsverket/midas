import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from './DatePicker'

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'DateRangePicker',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Primary: Story = {
  args: {
    label: 'Välj datum',
    description: 'YYYY-MM-DD',
  },
}
