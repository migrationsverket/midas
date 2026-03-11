import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Settings, User } from 'lucide-react'
import { Header } from '../Header'
import { HeaderActions } from './HeaderActions'
import { HeaderAction } from '../header-action'

type Story = StoryObj<typeof HeaderActions>

export default {
  component: HeaderActions,
  title: 'Components/Layout/Header/HeaderActions',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
      <Header>
        <Story />
      </Header>
    ),
  ],
} satisfies Meta<typeof HeaderActions>

export const Primary: Story = {
  render: () => (
    <HeaderActions>
      <HeaderAction icon={<Bell />}>Notiser</HeaderAction>
      <HeaderAction icon={<Settings />}>Inställningar</HeaderAction>
      <HeaderAction icon={<User />}>Min profil</HeaderAction>
    </HeaderActions>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <HeaderActions>
      <HeaderAction
        aria-label='Notiser'
        icon={<Bell />}
      />
      <HeaderAction
        aria-label='Inställningar'
        icon={<Settings />}
      />
      <HeaderAction
        aria-label='Min profil'
        icon={<User />}
      />
    </HeaderActions>
  ),
}
