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

export const Circular: Story = {
  args: {
    shape: 'circular',
    value: 40,
    'aria-label': 'Loading...',
  },
}

export const CircularSmall: Story = {
  args: {
    shape: 'circular',
    small: true,
    value: 40,
    'aria-label': 'Loading...',
  },
}

export const CircularIndeterminate: Story = {
  tags: ['!snapshot'],
  args: {
    shape: 'circular',
    small: true,
    isIndeterminate: true,
    'aria-label': 'Loading...',
  },
}
