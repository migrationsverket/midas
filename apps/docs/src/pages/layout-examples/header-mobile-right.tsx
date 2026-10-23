import { Bell, House, User } from 'lucide-react'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  MobileMenu,
  Navigation,
  NavigationItem,
  NavigationLink,
} from '@midas-ds/layout'

export default function HeaderMobileRightExample() {
  return (
    <Header>
      <HeaderLogo />
      <HeaderTitle>Mitt system</HeaderTitle>
      <HeaderActions>
        <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
        <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
      </HeaderActions>
      <MobileMenu
        title='Mitt system'
        placement='right'
      >
        <Navigation>
          <NavigationItem>
            <NavigationLink
              href='#'
              icon={<House />}
              isActive
            >
              Hem
            </NavigationLink>
          </NavigationItem>
        </Navigation>
      </MobileMenu>
    </Header>
  )
}
