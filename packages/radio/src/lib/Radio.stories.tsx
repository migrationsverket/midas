import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Radio>

export const Example: Story = {
  args: {
    value: 'unsubscribe',
    isDisabled: false,
  },
  render: ({ ...args }) => {
    return <Radio {...args}>Unsubscribe</Radio>
  },
}
