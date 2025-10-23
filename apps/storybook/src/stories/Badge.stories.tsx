import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell } from 'lucide-react'
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

export const NoLabel: Story = {}

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
