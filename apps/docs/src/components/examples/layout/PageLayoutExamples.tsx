import React from 'react'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  Sidebar,
  Navigation,
  NavigationItem,
  NavigationLink,
  Panel,
  MobileMenu,
  Navbar,
} from '@midas-ds/layout'
import { Bell, House, Settings, User } from 'lucide-react'
import { Button } from '@midas-ds/components'
import { useState } from 'react'
import { useMediaQuery } from '@react-spectrum/utils'

export const OnlyHeaderExample: React.FC = () => (
  <div
    className='card'
    style={{ overflow: 'hidden', padding: 0 }}
  >
    <div>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
          <HeaderAction icon={<Settings size={20} />}>
            Inställningar
          </HeaderAction>
        </HeaderActions>
      </Header>

      <div
        style={{
          padding: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 180,
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.65)',
        }}
      >
        Din applikation
      </div>
    </div>
  </div>
)
const NavigationContent = () => (
  <Navigation>
    <NavigationItem>
      <NavigationLink
        href='#'
        icon={<House />}
        isActive
      >
        Hem
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink
        href='#'
        icon={<Settings />}
      >
        Inställningar
      </NavigationLink>
    </NavigationItem>
  </Navigation>
)

export const DesktopAppExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className='card'
      style={{ padding: 0 }}
    >
      <Layout>
        <Header>
          <MobileMenu title='Meny'>
            <NavigationContent />
          </MobileMenu>
          <HeaderLogo />
          <HeaderTitle>Mitt system</HeaderTitle>
          <HeaderActions>
            <HeaderAction icon={<Bell />}>Notifieringar</HeaderAction>
            <HeaderAction icon={<User />}>Min profil</HeaderAction>
          </HeaderActions>
        </Header>

        <LayoutContent>
          <Sidebar title='Navigation'>
            <NavigationContent />
          </Sidebar>

          <Main>
            <Button onPress={() => setIsOpen(true)}>Öppna panel</Button>
          </Main>
          <Panel
            id='detaljer'
            title='Detaljer'
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            Panel med detaljer
          </Panel>
        </LayoutContent>
      </Layout>
    </div>
  )
}

export const MobileAppOnlyNavbarExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className='card'
      style={{ padding: 0 }}
    >
      <Layout>
        <Header>
          <HeaderLogo />
          <HeaderTitle>Mitt system</HeaderTitle>
          <HeaderActions>
            <HeaderAction icon={<Bell />}>Notifieringar</HeaderAction>
            <HeaderAction icon={<User />}>Min profil</HeaderAction>
          </HeaderActions>
        </Header>

        <LayoutContent>
          <Main>
            <Button onPress={() => setIsOpen(true)}>Öppna panel</Button>
          </Main>
          <Panel
            id='detaljer'
            title='Detaljer'
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            Panel med detaljer
          </Panel>
        </LayoutContent>
        <Navbar>
          <Navigation>
            <NavigationItem>
              <NavigationLink
                href='#'
                icon={<House />}
                isActive
              >
                Hem
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href='#'
                icon={<Settings />}
              >
                Inställningar
              </NavigationLink>
            </NavigationItem>
          </Navigation>
        </Navbar>
      </Layout>
    </div>
  )
}

export const MobileAppSidebarNavbarExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const showNavbar = useMediaQuery('(max-width: 640px)')
  return (
    <div
      className='card'
      style={{ padding: 0 }}
    >
      <Layout>
        <Header>
          <HeaderLogo />
          <HeaderTitle>Mitt system</HeaderTitle>
          <HeaderActions>
            <HeaderAction icon={<Bell />}>Notifieringar</HeaderAction>
            <HeaderAction icon={<User />}>Min profil</HeaderAction>
          </HeaderActions>
        </Header>

        <LayoutContent>
          <Sidebar title='Navigation'>
            <NavigationContent />
          </Sidebar>
          <Main>
            <Button onPress={() => setIsOpen(true)}>Öppna panel</Button>
          </Main>
          <Panel
            id='detaljer'
            title='Detaljer'
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          >
            Panel med detaljer
          </Panel>
        </LayoutContent>
        {showNavbar && (
          <Navbar>
            <NavigationContent />
          </Navbar>
        )}
      </Layout>
    </div>
  )
}
