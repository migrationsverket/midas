import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  Layout,
  LayoutContent,
  Main,
  MobileMenu,
  PanelProvider,
  PanelRegion,
  Sidebar,
} from '@midas-ds/layout'
import Applications from './pages/applications/index.tsx'
import ApplicationsNew from './pages/applications/new.tsx'
import ApplicationsDrafts from './pages/applications/drafts.tsx'
import { Navigation } from './components/Navigation.tsx'
import Home from './pages/home.tsx'
import {
  Badge,
  BadgeContainer,
  GlobalToastRegion,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@midas-ds/components'
import { Bell, Cog } from 'lucide-react'

import '@midas-ds/components/default.css'
import '@midas-ds/layout/default.css'

const title = 'vite + react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PanelProvider>
        <Layout>
          <Header>
            <MobileMenu title={title}>
              <Navigation />
            </MobileMenu>
            <Link to='/'>
              <HeaderLogo />
            </Link>
            <HeaderActions>
              <HeaderAction
                icon={
                  <BadgeContainer>
                    <Bell />
                    <Badge>3</Badge>
                  </BadgeContainer>
                }
                aria-label='Notifications, 3 unread'
              />
              <MenuTrigger>
                <HeaderAction
                  icon={<Cog />}
                  aria-label='Settings'
                />
                <MenuPopover>
                  <Menu>
                    <MenuItem>My profile</MenuItem>
                    <MenuItem>Preferences</MenuItem>
                    <MenuItem>Sign out</MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>
            </HeaderActions>
          </Header>
          <LayoutContent>
            <Sidebar title={title}>
              <Navigation />
            </Sidebar>
            <Main>
              <Routes>
                <Route
                  path='/'
                  element={<Home />}
                />
                <Route
                  path='/applications'
                  element={<Applications />}
                />
                <Route
                  path='/applications/new'
                  element={<ApplicationsNew />}
                />
                <Route
                  path='/applications/drafts'
                  element={<ApplicationsDrafts />}
                />
              </Routes>
            </Main>
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
      <GlobalToastRegion />
    </BrowserRouter>
  </StrictMode>,
)
