import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Settings } from 'lucide-react'
import { HeaderAction } from '.'
import { BadgeContainer, Badge } from '@midas-ds/components'

type Story = StoryObj<typeof HeaderAction>

export default {
  component: HeaderAction,
  title: 'Layout/Header/HeaderAction',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof HeaderAction>

export const Primary: Story = {
  args: {
    children: 'Notiser',
    'aria-label': '12 olästa notiser',
    icon: (
      <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    'aria-label': 'Användarinställningar',
    icon: <Settings />,
  },
}
