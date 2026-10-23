import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import { Globe, Search } from 'lucide-react'
import * as headerActionsStories from './header-actions/HeaderActions.stories'
import * as MobileMenuStories from './mobile-menu/MobileMenu.stories'
import { Header } from './Header'
import { HeaderAction } from './header-action'
import { HeaderActions } from './header-actions'
import { HeaderLogo } from './header-logo'
import { HeaderTitle } from './header-title'

type Story = StoryObj<typeof Header>

const { Primary: PrimaryHeaderActions, Vertical: VerticalHeaderActions } =
  composeStories(headerActionsStories)
const { Primary: PrimaryMobileMenu, PlacementRight: MobileMenuPlacementRight } =
  composeStories(MobileMenuStories)

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

export const DesktopVerticalActions: Story = {
  render: () => (
    <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <VerticalHeaderActions />
    </Header>
  ),
}

/** Vertical actions keep their labels on small screens, so only a few short ones fit */
export const MobileVerticalActions: Story = {
  globals: { viewport: { value: 'smallest' } },
  render: () => (
    <Header>
      <PrimaryMobileMenu />
      <HeaderLogo />
      <HeaderActions orientation='vertical'>
        <HeaderAction icon={<Search size={20} />}>Sök</HeaderAction>
        <HeaderAction icon={<Globe size={20} />}>Språk</HeaderAction>
      </HeaderActions>
    </Header>
  ),
}

export const MobileMenuRight: Story = {
  globals: { viewport: { value: 'small' } },
  render: () => (
    <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <PrimaryHeaderActions />
      <MobileMenuPlacementRight />
    </Header>
  ),
}

export const MobileMenuRightWithoutActions: Story = {
  globals: { viewport: { value: 'small' } },
  render: () => (
    <Header>
      <HeaderLogo />
      <HeaderTitle>System name</HeaderTitle>
      <MobileMenuPlacementRight />
    </Header>
  ),
}
