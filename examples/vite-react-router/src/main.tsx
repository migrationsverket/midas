import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { Logo } from '@midas-ds/components'
import {
  Header,
  Layout,
  LayoutContent,
  Main,
  MobileMenu,
  Panel,
} from '@midas-ds/layout'
import Applications from './Applications.tsx'
import { Navigation } from './components/Navigation.tsx'
import App from './App.tsx'
import '@midas-ds/components/default.css'

const title = 'vite + react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Header>
          <MobileMenu title={title}>
            <Navigation />
          </MobileMenu>
          <Link to='/'>
            <Logo />
          </Link>
        </Header>
        <LayoutContent>
          <Panel
            title={title}
            variant='collapse'
          >
            <Navigation />
          </Panel>
          <Main>
            <Routes>
              <Route
                path='/'
                element={<App />}
              />
              <Route
                path='/applications'
                element={<Applications />}
              />
            </Routes>
          </Main>
        </LayoutContent>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
