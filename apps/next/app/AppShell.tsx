'use client'

import { useState, useId, Fragment, ReactNode } from 'react'
import { Button, Logo } from '@midas-ds/components'
import {
  Layout,
  Header,
  Main,
  Panel,
  Navbar,
  Navigation,
  Hamburger,
} from '@midas-ds/layout'
import {
  House,
  List,
  FileText,
  Plus,
  Save,
  Send,
  User,
  HelpCircle,
  Mail,
} from 'lucide-react'
import { NavLink } from '../components/NavLink'

type NavItem = {
  title?: string
  href?: string
  icon?: ReactNode
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    children: [
      {
        href: '/',
        title: 'Home',
        icon: <House />,
      },
      {
        href: '/applications',
        title: 'Applications',
        icon: <FileText />,
        children: [
          {
            children: [
              {
                href: '/applications/new',
                title: 'New application',
                icon: <Plus />,
              },
              {
                href: '/applications/drafts',
                title: 'Drafts',
                icon: <Save />,
              },
              {
                href: '/applications/sent',
                title: 'Sent',
                icon: <Send />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Account',
    children: [
      {
        href: '/profile',
        title: 'Profile',
        icon: <User />,
      },
    ],
  },
  {
    children: [
      {
        href: '/help',
        title: 'Help',
        icon: <HelpCircle />,
      },
      {
        href: '/mail',
        title: 'Mail',
        icon: <Mail />,
      },
    ],
  },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const drawerId = useId()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isDismissPanelOpen, setIsDismissPanelOpen] = useState(false)

  return (
    <Layout>
      <Header data-debug='Header'>
        <Hamburger
          aria-controls={drawerId}
          isOpen={isDrawerOpen}
          onPress={() => setIsDrawerOpen(x => !x)}
        />
        <Logo />
      </Header>
      <Layout.Content>
        <Panel
          data-debug='Panel (collapse)'
          id={drawerId}
          isDrawerOpen={isDrawerOpen}
          onDrawerOpenChange={setIsDrawerOpen}
          title='Next App'
          variant='collapse'
        >
          <Navigation>
            {navItems.map(function renderNavItems(item, index) {
              return (
                <Navigation.SubMenu
                  title={item.title}
                  key={item.title || '' + index}
                >
                  {item.children?.map(({ href, title, icon, children }) => (
                    <Fragment key={href}>
                      {title && href && (
                        <NavLink
                          href={href}
                          title={title}
                        >
                          {icon}
                        </NavLink>
                      )}
                      {children?.length && children.map(renderNavItems)}
                    </Fragment>
                  ))}
                </Navigation.SubMenu>
              )
            })}
          </Navigation>
        </Panel>
        <Main data-debug='Main'>
          {children}
          {!isDismissPanelOpen && (
            <Button onPress={() => setIsDismissPanelOpen(true)}>
              Open side panel
            </Button>
          )}
        </Main>
        <Panel
          variant='dismiss'
          title='Details'
          aria-label='details panel'
          data-debug='Panel (dismiss)'
          isOpen={isDismissPanelOpen}
          onOpenChange={setIsDismissPanelOpen}
        />
      </Layout.Content>
      <Navbar data-debug='Navbar'>
        <ul>
          <NavLink
            href='/'
            variant='navbar'
            title='Home'
          >
            <House />
          </NavLink>
          <NavLink
            href='/applications'
            variant='navbar'
            title='Applications'
          >
            <List />
          </NavLink>
        </ul>
      </Navbar>
    </Layout>
  )
}
