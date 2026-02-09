import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layout } from '.'
import { Header } from '../header'
import { Panel } from '../panel'
import { Navbar } from '../navbar'
import { Navigation } from '../navigation'
import { NavigationLink } from '../navigation-link'
import { House, Menu } from 'lucide-react'
import { Button } from '@midas-ds/components'
import { useId, useState } from 'react'

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
  render: ({ children, ...rest }) => {
    const drawerId = useId()

    const [isNavigationOpen, setIsNavigationOpen] = useState(false)

    const toggleIsNavigationOpen = () => setIsNavigationOpen(x => !x)

    return (
      <Layout {...rest}>
        <Header>
          <Button
            aria-controls={drawerId}
            aria-expanded={isNavigationOpen}
            aria-haspopup='dialog'
            icon={Menu}
            onPress={toggleIsNavigationOpen}
            variant='icon'
          />
        </Header>
        <Panel aria-label='left panel'>
          <Navigation
            id={drawerId}
            isOpen={isNavigationOpen}
            onOpenChange={setIsNavigationOpen}
          >
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
    )
  },
}
