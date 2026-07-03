import { Bell, House, Settings, User } from 'lucide-react'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  Navigation,
  NavigationItem,
  NavigationLink,
  Sidebar,
} from '@midas-ds/layout'

export default function HeaderExample() {
  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
          <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>
        </HeaderActions>
      </Header>
      <LayoutContent>
        <Sidebar title='Mitt system'>
          <Navigation>
            <NavigationItem>
              <NavigationLink href='#' icon={<House />} isActive>Hem</NavigationLink>
            </NavigationItem>
          </Navigation>
        </Sidebar>
        <Main>
          <div style={{ height: '100%', border: 'dashed 2px var(--midas-border-color-subtle)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--midas-text-subtle)' }}>App-innehåll</div>
        </Main>
      </LayoutContent>
    </Layout>
  )
}
