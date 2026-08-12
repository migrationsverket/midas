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

export default function HeaderMobileExample() {
  return (
    <>
      <style>{`.navbar, .footer { display: none !important; } .main-wrapper { padding-top: 0 !important; }`}</style>
      <Header>
        <MobileMenu title='Mitt system'>
          <Navigation>
            <NavigationItem>
              <NavigationLink href='#' icon={<House />} isActive>Hem</NavigationLink>
            </NavigationItem>
          </Navigation>
        </MobileMenu>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
        </HeaderActions>
      </Header>
    </>
  )
}
