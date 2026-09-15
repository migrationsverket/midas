import { Link } from 'react-router'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  MobileMenu,
  usePanels,
} from '@midas-ds/layout'
import {
  Badge,
  BadgeContainer,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@midas-ds/components'
import { Bell, Cog } from 'lucide-react'
import { Navigation } from './Navigation'
import { notifications } from '../data/notifications'

const title = 'vite + react-router'

export const AppHeader = () => {
  const { addPanel } = usePanels()

  const openNotifications = () => {
    addPanel({
      id: 'notifications',
      title: 'Notifications',
      children: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {notifications.map(notification => (
            <div
              key={notification.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--midas-space-05)',
                paddingBlock: 'var(--midas-space-small)',
                borderBottom: '1px solid var(--midas-border-color-subtle)',
              }}
            >
              <p style={{ margin: 0 }}>{notification.message}</p>
              <span style={{ color: 'var(--midas-text-secondary)' }}>
                {notification.time}
              </span>
            </div>
          ))}
        </div>
      ),
    })
  }

  return (
    <Header>
      <MobileMenu title={title}>
        <Navigation />
      </MobileMenu>
      <Link to='/'>
        <HeaderLogo />
      </Link>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderActions>
        <HeaderAction
          icon={
            <BadgeContainer>
              <Bell />
              <Badge>{notifications.length}</Badge>
            </BadgeContainer>
          }
          onPress={openNotifications}
        >
          Notifications
        </HeaderAction>
        <MenuTrigger>
          <HeaderAction icon={<Cog />}>Settings</HeaderAction>
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
  )
}
