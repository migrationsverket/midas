import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationLink } from '.'
import { House } from 'lucide-react'
import { PanelContext } from '../../../panel'

type Story = StoryObj<typeof NavigationLink>

export default {
  component: NavigationLink,
  title: 'Components/Layout/Navigation/NavigationLink',
  tags: ['autodocs'],
  args: {
    title: 'Hem',
    href: '/',
    children: <House />,
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
    <PanelContext.Provider value={{ isCollapsed: true }}>
      <NavigationLink {...args} />
    </PanelContext.Provider>
  ),
}
