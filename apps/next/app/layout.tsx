import type { Metadata } from 'next'
import '@midas-ds/components/default.css'
import './global.css'
import Link from 'next/link'
import { Logo } from '@midas-ds/components'
import { Layout, Header, Panel, Navbar, Main, MobileMenu } from '@midas-ds/layout'
import { Navigation } from '../components/Navigation'
import { NavLink } from '../components/NavLink'
import { House, List } from 'lucide-react'

export const metadata: Metadata = {
  title: 'midas components E2E',
  description: 'E2E test app for Midas components',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body>
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
            <Main data-debug='Main'>{children}</Main>
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
      </body>
    </html>
  )
}
