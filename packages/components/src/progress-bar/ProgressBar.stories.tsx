import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from './ProgressBar'

type Story = StoryObj<typeof ProgressBar>

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  tags: ['autodocs'],
  args: {
    isIndeterminate: false,
  },
} satisfies Meta<typeof ProgressBar>

export const Primary: Story = {
  args: {
    label: 'Loading...',
    showValueLabel: true,
    value: 33,
    minValue: 0,
    maxValue: 100,
  },
}

export const WithoutLabels: Story = {
  args: {
    value: 66,
    'aria-label': 'Loading...',
  },
}

export const IsIndeterminate: Story = {
  tags: ['!snapshot'],
  args: {
    isIndeterminate: true,
    label: 'Waiting...',
  },
}
