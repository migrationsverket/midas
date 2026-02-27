import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@midas-ds/components'
import {
  Layout,
  Header,
  Panel,
  Navbar,
  Main,
  MobileMenu,
  LayoutContent,
} from '@midas-ds/layout'
import { BottomNavigation, SidebarNavigation } from '../components/Navigation'
import { AppHeaderActions } from '../components/HeaderActions/HeaderActions'
import { NotificationsPanel } from '../components/NotificationsPanel/NotificationsPanel'
import { AppProvider } from '../components/AppProvider/AppContext'
import { GlobalToastRegion } from '@midas-ds/components'
import '@midas-ds/components/default.css'
import './global.css'

export const metadata: Metadata = {
  title: 'midas components E2E',
  description: 'E2E test app for Midas components',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>
        <GlobalToastRegion />
        <Layout>
          <Header data-debug='Header'>
            <MobileMenu>
              <SidebarNavigation />
            </MobileMenu>
            <Link href='/'>
              <Logo />
            </Link>
            <AppHeaderActions />
          </Header>
          <LayoutContent>
            <Panel
              data-debug='Panel (collapse)'
              title='Next App'
              variant='collapse'
            >
              <SidebarNavigation />
            </Panel>
            <Main data-debug='Main'>{children}</Main>
            <NotificationsPanel />
          </LayoutContent>
          <Navbar data-debug='Navbar'>
            <BottomNavigation />
          </Navbar>
        </Layout>
        </AppProvider>
      </body>
    </html>
  )
}
