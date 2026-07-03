'use client'

import { Bell, CircleUserRound, HelpCircle, Languages, MoreHorizontal, Settings, Sun } from 'lucide-react'
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'
import { useMediaQuery } from '@react-spectrum/utils'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
  MobileMenu,
  Navigation,
  NavigationItem,
  NavigationLink,
  Sidebar,
} from '@midas-ds/layout'
import { House } from 'lucide-react'

const Nav = () => (
  <Navigation>
    <NavigationItem>
      <NavigationLink href='/' icon={<House />} isActive>Hem</NavigationLink>
    </NavigationItem>
  </Navigation>
)

// The app knows it has 5 collapsible actions and they stop fitting around 480px.
// Pick whatever breakpoint makes sense for your content.
const overflowActions = [
  { label: 'Profil', icon: <CircleUserRound size={20} />, onPress: () => alert('Profil') },
  { label: 'Språk', icon: <Languages size={20} />, onPress: () => alert('Språk') },
  { label: 'Tema', icon: <Sun size={20} />, onPress: () => alert('Tema') },
  { label: 'Hjälp', icon: <HelpCircle size={20} />, onPress: () => alert('Hjälp') },
  { label: 'Inställningar', icon: <Settings size={20} />, onPress: () => alert('Inställningar') },
]

export const HeaderPage = () => {
  const isNarrow = useMediaQuery('(max-width: 480px)')

  return (
    <Layout>
      <Header>
        <MobileMenu title='Min app'>
          <Nav />
        </MobileMenu>
        <HeaderLogo />
        <HeaderTitle>HETA</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />} onPress={() => alert('Notifikationer')}>
            Notifikationer
          </HeaderAction>
          {isNarrow ? (
            <MenuTrigger>
              <HeaderAction aria-label='Fler alternativ' icon={<MoreHorizontal size={20} />} />
              <MenuPopover>
                <Menu onAction={key => overflowActions[Number(key)]?.onPress()}>
                  {overflowActions.map((action, i) => (
                    <MenuItem key={i} id={String(i)}>
                      {action.icon} {action.label}
                    </MenuItem>
                  ))}
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          ) : (
            overflowActions.map((action, i) => (
              <HeaderAction key={i} icon={action.icon} onPress={action.onPress}>
                {action.label}
              </HeaderAction>
            ))
          )}
        </HeaderActions>
      </Header>
      <LayoutContent>
        <Sidebar title='Min app'>
          <Nav />
        </Sidebar>
        <Main>Page content</Main>
      </LayoutContent>
    </Layout>
  )
}
