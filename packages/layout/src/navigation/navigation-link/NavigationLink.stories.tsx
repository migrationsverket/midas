import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationLink } from '.'
import { Bell, House } from 'lucide-react'
import { SidebarContext } from '../../sidebar'
import { Badge, BadgeContainer } from '@midas-ds/components'

type Story = StoryObj<typeof NavigationLink>

export default {
  component: NavigationLink,
  title: 'Layout/Navigation/NavigationLink',
  tags: ['autodocs'],
  args: {
    children: 'Hem',
    href: '/',
    icon: <House />,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavigationLink>

export const Primary: Story = {}

export const Active: Story = { args: { isActive: true } }

export const Disabled: Story = { args: { isDisabled: true } }

export const Collapsed: Story = {
  render: args => (
    <SidebarContext.Provider value={{ isCollapsed: true }}>
      <NavigationLink {...args} />
    </SidebarContext.Provider>
  ),
}

export const WithBadge: Story = {
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: (
      <BadgeContainer>
        <Bell />
        <Badge />
      </BadgeContainer>
    ),
  },
}

export const WithBadgeLabel: Story = {
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    icon: (
      <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
    ),
  },
}

export const WithBadgeActive: Story = {
  args: {
    children: 'Meddelanden',
    href: '/meddelanden',
    isActive: true,
    icon: (
      <BadgeContainer>
        <Bell />
        <Badge>12</Badge>
      </BadgeContainer>
    ),
  },
}

export const WithBadgeCollapsed: Story = {
  render: args => (
    <SidebarContext.Provider value={{ isCollapsed: true }}>
      <NavigationLink
        {...args}
        icon={
          <BadgeContainer>
            <Bell />
            <Badge>12</Badge>
          </BadgeContainer>
        }
      >
        Meddelanden
      </NavigationLink>
    </SidebarContext.Provider>
  ),
}
