import { BrowserRouter, Route, Routes } from 'react-router'
import {
  Layout,
  LayoutContent,
  Main,
  PanelProvider,
  PanelRegion,
  Sidebar,
} from '@midas-ds/layout'
import { GlobalToastRegion } from '@midas-ds/components'
import { AppHeader } from './components/AppHeader'
import { Navigation } from './components/Navigation'
import Applications from './pages/applications/index.tsx'
import ApplicationsNew from './pages/applications/new.tsx'
import ApplicationsDrafts from './pages/applications/drafts.tsx'
import Home from './pages/home.tsx'

export const App = () => {
  return (
    <BrowserRouter>
      <PanelProvider>
        <Layout>
          <AppHeader />
          <LayoutContent>
            <Sidebar title='Navigation'>
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
  )
}
