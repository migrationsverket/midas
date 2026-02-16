'use client'

import { ComponentProps, useState, useId } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@midas-ds/components'
import {
  Layout,
  Header,
  Main,
  Panel,
  Navbar,
  Navigation,
} from '@midas-ds/layout'
import {
  House,
  List,
  Menu,
  FileText,
  Plus,
  Save,
  Send,
  User,
  HelpCircle,
  Mail,
} from 'lucide-react'

function NavLink({
  href,
  ...props
}: ComponentProps<typeof Navigation.Link<typeof NextLink>>) {
  const pathname = usePathname()
  const active = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return <Navigation.Link as={NextLink} href={href} isActive={active} {...props} />
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const drawerId = useId()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isDismissPanelOpen, setIsDismissPanelOpen] = useState(false)

  return (
    <Layout
      header={
        <Header data-debug='Header'>
          <Button
            aria-controls={drawerId}
            aria-expanded={isDrawerOpen}
            aria-haspopup='dialog'
            icon={Menu}
            onPress={() => setIsDrawerOpen(x => !x)}
            variant='icon'
          />
        </Header>
      }
      sidebar={
        <Panel
          variant='collapse'
          title='Next App'
          data-debug='Panel (collapse)'
        >
          <Navigation
            id={drawerId}
            isOpen={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
          >
            <NavLink href='/' title='Hem'>
              <House />
            </NavLink>
            <Navigation.SubMenu>
              <NavLink href='/applications' title='Applications'>
                <FileText />
              </NavLink>
              <Navigation.SubMenu>
                <NavLink href='/applications/new' title='New application'>
                  <Plus />
                </NavLink>
                <NavLink href='/applications/drafts' title='Drafts'>
                  <Save />
                </NavLink>
                <NavLink href='/applications/sent' title='Sent'>
                  <Send />
                </NavLink>
              </Navigation.SubMenu>
            </Navigation.SubMenu>
            <Navigation.SubMenu title='Account'>
              <NavLink href='/profile' title='Profile'>
                <User />
              </NavLink>
            </Navigation.SubMenu>
            <NavLink href='/help' title='Help'>
              <HelpCircle />
            </NavLink>
            <NavLink href='/contact' title='Contact'>
              <Mail />
            </NavLink>
          </Navigation>
        </Panel>
      }
      navbar={
        <Navbar data-debug='Navbar'>
          <ul>
            <NavLink href='/' variant='navbar' title='Home'>
              <House />
            </NavLink>
            <NavLink href='/applications' variant='navbar' title='Applications'>
              <List />
            </NavLink>
          </ul>
        </Navbar>
      }
      dismissPanel={
        <Panel
          variant='dismiss'
          title='Details'
          aria-label='details panel'
          data-debug='Panel (dismiss)'
          isOpen={isDismissPanelOpen}
          onOpenChange={setIsDismissPanelOpen}
        />
      }
    >
      <Main data-debug='Main'>
        {children}
        {!isDismissPanelOpen && (
          <Button onPress={() => setIsDismissPanelOpen(true)}>
            Open side panel
          </Button>
        )}
      </Main>
    </Layout>
  )
}
