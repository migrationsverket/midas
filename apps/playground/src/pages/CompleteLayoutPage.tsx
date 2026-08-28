import {
  Header,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  Navbar,
  Navigation,
  NavigationItem,
  NavigationLink,
  Sidebar,
} from '@midas-ds/layout'
import { Plus } from 'lucide-react'
import { Link, Route, Routes, useLocation } from 'react-router'

const pages = [
  { path: '/', title: 'Första' },
  { path: '/andra', title: 'Andra' },
  { path: '/tredje', title: 'Tredje' },
  { path: '/fjarde', title: 'Fjärde' },
  { path: '/femte', title: 'Femte' },
]

const NavItems = () => {
  const location = useLocation()

  return (
    <Navigation>
      {pages.map(({ path, title }) => (
        <NavigationItem key={path}>
          <NavigationLink
            as={Link}
            to={path}
            icon={<Plus />}
            isActive={location.pathname === path}
          >
            {title}
          </NavigationLink>
        </NavigationItem>
      ))}
    </Navigation>
  )
}

export const CompleteLayoutPage = () => (
  <Layout>
    <Header>
      <HeaderLogo />
      <HeaderTitle>Demo</HeaderTitle>
    </Header>

    <LayoutContent>
      <Sidebar title='Nav'>
        <NavItems />
      </Sidebar>
      <Main style={{ padding: 16 }}>
        <Routes>
          {pages.map(({ path, title }) => (
            <Route
              key={path}
              path={path}
              element={<p>{title}</p>}
            />
          ))}
        </Routes>
      </Main>
    </LayoutContent>

    <Navbar>
      <NavItems />
    </Navbar>
  </Layout>
)
