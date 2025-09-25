import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Bell } from 'lucide-react'
import { hexToRgb, lightDark } from '../utils/test'
import { Badge, BadgeContainer, Button } from '@midas-ds/components'

type Story = StoryObj<typeof Badge>

export default {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
        hexToRgb('#e62323'),
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
