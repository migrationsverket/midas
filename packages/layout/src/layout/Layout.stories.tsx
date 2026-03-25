import { type Meta, type StoryObj } from '@storybook/react-vite'
import { Layout, LayoutContent } from '.'
import { Header, HeaderAction, HeaderActions } from '../header'
import { Panel } from '../panel'
import { Navbar } from '../navbar'
import { Bell, House, List, Menu, User } from 'lucide-react'
import { Button } from '@midas-ds/components'
import { useId, useState } from 'react'
import { NavigationLink } from '../navigation'
import { Main } from '../main'

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
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
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(true)

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
          <HeaderActions>
            <HeaderAction icon={<Bell />}>Notiser</HeaderAction>
            <HeaderAction icon={<User />}>Min profil</HeaderAction>
          </HeaderActions>
        </Header>
        <LayoutContent>
          <Main>
            {children}
            {!isRightPanelOpen && (
              <Button onPress={() => setIsRightPanelOpen(true)}>
                Öppna sidopanel
              </Button>
            )}
          </Main>
          <Panel
            id='panel'
            aria-label='right panel'
            isOpen={isRightPanelOpen}
            onOpenChange={setIsRightPanelOpen}
            style={{ gridArea: 'panelRight' }}
            title='Panel'
          />
        </LayoutContent>
        <Navbar>
          <ul>
            <NavigationLink
              href='/'
              isActive
              icon={<House />}
            >
              Hem
            </NavigationLink>
            <NavigationLink
              href='/categories'
              icon={<List />}
            >
              Kategorier
            </NavigationLink>
          </ul>
        </Navbar>
      </Layout>
    )
  },
}
