import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from '.'

type Story = StoryObj<typeof Radio>

export default {
  title: 'Components/Radio',
  args: {
    children: 'Standard Shipping (Free)',
    isDisabled: false,
  },
  component: Radio,
  decorators: Story => (
    <RadioGroup>
      <Story />
    </RadioGroup>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
