import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/DatePicker',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {
  args: {
    label: 'Välj datum',
    description: 'YYYY-MM-DD'
  }
}

export const WithTime: Story = {
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second'
  }
}
