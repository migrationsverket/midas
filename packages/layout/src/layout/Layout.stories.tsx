import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as headerStories from '../header/Header.stories'
import * as sidebarStories from '../sidebar/Sidebar.stories'
import * as navbarStories from '../navbar/Navbar.stories'
import { Main } from '../main'
import { Layout, LayoutContent } from '.'
import { Panel } from '../panel'

const { Primary: PrimaryHeader, WithMobileMenu: HeaderWithMobileMenu } =
  composeStories(headerStories)
const { Primary: PrimarySidebar } = composeStories(sidebarStories)
const { Primary: PrimaryNavbar } = composeStories(navbarStories)

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
  title: 'Layout/Layout',
  tags: ['autodocs'],
  args: {
    children: 'Content',
  },
  parameters: { layout: 'fullscreen', rootElement: 'div' },
} satisfies Meta<typeof Layout>

export const WithMobileMenu: Story = {
  render: args => (
    <Layout {...args}>
      <HeaderWithMobileMenu />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel
          id='panel'
          defaultOpen
          title='Panel'
        />
      </LayoutContent>
    </Layout>
  ),
}

export const WithNavbar: Story = {
  render: args => (
    <Layout {...args}>
      <PrimaryHeader />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel
          id='panel'
          defaultOpen
          title='Panel'
        />
      </LayoutContent>
      <PrimaryNavbar />
    </Layout>
  ),
}
