import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

type Story = StoryObj<typeof Switch>

export default {
  component: Switch,
  title: 'Components/Switch',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'medium',
    children: 'children',
  },
} satisfies Meta<typeof Switch>

export const Primary: Story = {}

export const Large: Story = { args: { size: 'large' } }

export const Checked: Story = { args: { defaultSelected: true } }

export const UnChecked: Story = { args: { defaultSelected: false } }

export const DisabledUnchecked: Story = { args: { isDisabled: true } }

export const DisabledChecked: Story = {
  args: { isDisabled: true, isSelected: true },
}
