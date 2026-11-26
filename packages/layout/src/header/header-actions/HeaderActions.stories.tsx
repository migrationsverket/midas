import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Settings, User } from 'lucide-react'
import { HeaderActions } from './HeaderActions'
import { HeaderAction } from '../header-action'

type Story = StoryObj<typeof HeaderActions>

export default {
  component: HeaderActions,
  title: 'Layout/Header/HeaderActions',
  // HeaderActions is just a wrapper for HeaderAction, we better display it composed in the Header story
  tags: ['!autodocs', '!dev'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HeaderActions>

export const Primary: Story = {
  render: args => (
    <HeaderActions {...args}>
      <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
      <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>
      <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
    </HeaderActions>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: Primary.render,
}
