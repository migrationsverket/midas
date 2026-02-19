'use client'

import Link from 'next/link'
import { Logo } from '@midas-ds/components'
import { Layout, Header, Panel, Navbar, MobileMenu } from '@midas-ds/layout'
import { Navigation } from '../components/Navigation'
import { NavLink } from '../components/NavLink'
import { House, List } from 'lucide-react'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header data-debug='Header'>
        <MobileMenu>
          <Navigation />
        </MobileMenu>
        <Link href='/'>
          <Logo />
        </Link>
      </Header>
      <Layout.Content>
        <Panel
          data-debug='Panel (collapse)'
          title='Next App'
          variant='collapse'
        >
          <Navigation />
        </Panel>
        {children}
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
