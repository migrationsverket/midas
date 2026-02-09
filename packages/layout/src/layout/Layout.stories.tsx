import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layout } from '.'
import { Header } from '../header'
import { Panel } from '../panel'
import { Navbar } from '../navbar'
import { Navigation } from '../navigation'
import { NavigationLink } from '../navigation-link'
import { House } from 'lucide-react'

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
  subcomponents: {
    Header,
    Navbar,
    Navigation,
    NavigationLink,
    Panel,
  },
  title: 'Components/Layout/Layout',
  tags: ['autodocs'],
  args: {
    children: 'Content',
  },
  parameters: { layout: 'fullscreen', rootElement: 'div' },
} satisfies Meta<typeof Layout>

export const Primary: Story = {
  render: ({ children, ...rest }) => (
    <Layout {...rest}>
      <Header>Header</Header>
      <Panel aria-label='left panel'>
        <Navigation>
          <ul>
            <li>
              <NavigationLink
                href='/'
                isActive
              >
                <House />
                Hem
              </NavigationLink>
            </li>
            <li>
              <NavigationLink href='/categories'>Kategorier</NavigationLink>
              <ul aria-label='Sidor'>
                <li>
                  <NavigationLink href='/categories/products'>
                    Produkter
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink href='/categories/services'>
                    Tjänster
                  </NavigationLink>
                </li>
              </ul>
            </li>
          </ul>
        </Navigation>
      </Panel>
      <main style={{ height: '5rem', padding: '1rem' }}>{children}</main>
      <Panel
        aria-label='right panel'
        style={{ gridArea: 'panelRight' }}
      >
        Panel
      </Panel>
      <Navbar>
        <ul>
          <li>
            <NavigationLink
              href='/'
              isActive
              variant='navbar'
            >
              <House />
              Hem
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              href='/categories'
              variant='navbar'
            >
              Kategorier
            </NavigationLink>
          </li>
        </ul>
      </Navbar>
    </Layout>
  ),
}
