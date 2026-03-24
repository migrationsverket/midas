import type { Metadata, Viewport } from 'next'
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
  PanelRegion,
  Sidebar,
} from '@midas-ds/layout'
import { BottomNavigation, SidebarNavigation } from '../components/Navigation'
import { AppHeaderActions } from '../components/HeaderActions/HeaderActions'
import { AppProvider } from '../components/AppProvider/AppContext'
import { AppLayoutProvider } from '../components/AppLayoutProvider/AppLayoutProvider'
import { GlobalToastRegion } from '@midas-ds/components'
import '@midas-ds/components/default.css'
import './global.css'

export const metadata: Metadata = {
  title: 'midas components E2E',
  description: 'E2E test app for Midas components',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>
          <GlobalToastRegion />
          <AppLayoutProvider>
            <Layout>
              <Header data-debug='Header'>
                <MobileMenu title='Next App'>
                  <SidebarNavigation />
                </MobileMenu>
                <Link href='/'>
                  <Logo />
                </Link>
                <AppHeaderActions />
              </Header>
              <LayoutContent>
                <Sidebar
                  data-debug='Sidebar'
                  title='Next App'
                >
                  <SidebarNavigation />
                </Sidebar>
                <Main data-debug='Main'>{children}</Main>
                <PanelRegion />
              </LayoutContent>
              <Navbar data-debug='Navbar'>
                <BottomNavigation />
              </Navbar>
            </Layout>
          </AppLayoutProvider>
        </AppProvider>
      </body>
    </html>
  )
}
