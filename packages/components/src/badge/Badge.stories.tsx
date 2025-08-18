import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'
import { BadgeContainer } from './BadgeContainer'
import { expect } from 'storybook/test'
import { Bell } from 'lucide-react'
import { Button } from '../button'
import { hexToRgb, lightDark } from '../utils/test'

type Story = StoryObj<typeof Badge>

export default {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: {
      // The color combo of the red box with number of notifications violates WCAG 2 AA contrast ratio threshold in dark mode
      test: 'todo',
    },
  },
  args: {},
  render: args => (
    <Button
      variant='tertiary'
      aria-label='Notiser'
    >
      <BadgeContainer>
        <Bell />
        <Badge
          {...args}
          data-testid='badge'
        />
      </BadgeContainer>
    </Button>
  ),
} satisfies Meta<typeof Badge>

export const NoLabel: Story = {
  play: async ({ canvas, globals: { scheme } }) => {
    const badge = await canvas.findByTestId('badge')
    await expect(badge).toHaveStyle({
      backgroundColor: lightDark(
        hexToRgb('#e62323'),
        hexToRgb('#eb4e4e'),
        scheme,
      ),
    })
  },
}

export const WithLabel: Story = {
  args: {
    children: '1',
  },
}

export const LongLabel: Story = {
  args: {
    children: '123',
  },
}
