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
      <HeaderAction icon={<Bell />}>Notiser</HeaderAction>
      <HeaderAction icon={<Settings />}>Inställningar</HeaderAction>
      <HeaderAction icon={<User />}>Min profil</HeaderAction>
    </HeaderActions>
  ),
}
