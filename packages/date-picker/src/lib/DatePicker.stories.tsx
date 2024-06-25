import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Primary = {
  args: {
    label: 'Välj datum',
    description: 'YYYY-MM-DD',
  },
}
