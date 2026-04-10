import { Logo } from '@midas-ds/components'
import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as headerActionsStories from './header-actions/HeaderActions.stories'
import * as MobileMenuStories from './mobile-menu/MobileMenu.stories'
import { Header } from './Header'

type Story = StoryObj<typeof Header>

const { Primary: PrimaryHeaderActions } = composeStories(headerActionsStories)
const { Primary: PrimaryMobileMenu } = composeStories(MobileMenuStories)

export default {
  component: Header,
  title: 'Layout/Header',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
} satisfies Meta<typeof Header>

export const Primary: Story = {
  render: () => (
    <Header>
      <Logo />
      <PrimaryHeaderActions />
    </Header>
  ),
}

export const WithMobileMenu: Story = {
  render: () => (
    <Header>
      <PrimaryMobileMenu />
      <Logo />
      <PrimaryHeaderActions />
    </Header>
  ),
}
