import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as headerActionsStories from './header-actions/HeaderActions.stories'
import * as MobileMenuStories from './mobile-menu/MobileMenu.stories'
import { Header } from './Header'
import { HeaderLogo } from './header-logo'
import { HeaderTitle } from './header-title'

type Story = StoryObj<typeof Header>

const { Primary: PrimaryHeaderActions } = composeStories(headerActionsStories)
const { Primary: PrimaryMobileMenu } = composeStories(MobileMenuStories)

export default {
  component: Header,
  title: 'Layout/Header',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
} satisfies Meta<typeof Header>

export const Desktop: Story = {
  render: () => (
    <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <PrimaryHeaderActions />
    </Header>
  ),
}

export const Mobile: Story = {
  globals: { viewport: { value: 'small' } },
  render: () => (
    <Header>
      <PrimaryMobileMenu />
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <PrimaryHeaderActions />
    </Header>
  ),
}
