import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Components/Calendar',
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
}
export default meta
type Story = StoryObj<typeof Calendar>

export const Primary: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
