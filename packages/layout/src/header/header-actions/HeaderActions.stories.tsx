import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Settings, User } from 'lucide-react'
import { HeaderActions } from '.'
import { Header } from '../'

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
      <HeaderActions.Button icon={<Bell />}>Notiser</HeaderActions.Button>
      <HeaderActions.Button icon={<Settings />}>Inställningar</HeaderActions.Button>
      <HeaderActions.Button icon={<User />}>Min profil</HeaderActions.Button>
    </HeaderActions>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <HeaderActions>
      <HeaderActions.Button aria-label='Notiser' icon={<Bell />} />
      <HeaderActions.Button aria-label='Inställningar' icon={<Settings />} />
      <HeaderActions.Button aria-label='Min profil' icon={<User />} />
    </HeaderActions>
  ),
}
