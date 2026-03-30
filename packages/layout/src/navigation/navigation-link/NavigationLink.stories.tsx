import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationLink } from '.'
import { House } from 'lucide-react'
import { SidebarContext } from '../../sidebar'

type Story = StoryObj<typeof NavigationLink>

export default {
  component: NavigationLink,
  title: 'Components/Layout/Navigation/NavigationLink',
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
