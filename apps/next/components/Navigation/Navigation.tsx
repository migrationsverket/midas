'use client'

import { ReactNode } from 'react'
import {
  Navigation as MidasNavigation,
  NavigationItem,
  NavigationSection,
  NavigationSubMenu,
} from '@midas-ds/layout'
import {
  House,
  FileText,
  Plus,
  Save,
  Send,
  User,
  HelpCircle,
  Mail,
  Bell,
} from 'lucide-react'
import { NavLink } from '../NavLink'
import { Key } from 'react-aria-components'
import { Badge, BadgeContainer } from '@midas-ds/components'
import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'

type Section = {
  id: Key
  title?: string
  children: Item[]
}

type Item = {
  ariaLabel?: string
  id: Key
  title: string
  href: string
  icon?: ReactNode
  children?: Item[]
}

const sections: Section[] = [
  {
    id: 0,
    children: [
      {
        id: 1,
        title: 'Home',
        href: '/',
        icon: <House />,
      },
      {
        id: 2,
        title: 'Applications',
        href: '/applications',
        icon: <FileText />,
        children: [
          {
            id: 4,
            title: 'New application',
            href: '/applications/new',
            icon: <Plus />,
          },
          {
            id: 5,
            title: 'Drafts',
            href: '/applications/drafts',
            icon: <Save />,
          },
          {
            id: 6,
            title: 'Sent',
            href: '/applications/sent',
            icon: <Send />,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Account',
    children: [
      {
        id: 8,
        title: 'Profile',
        href: '/profile',
        icon: <User />,
      },
      {
        id: 81,
        title: 'Notifications',
        href: '/notifications',
      },
    ],
  },
  {
    id: 9,
    children: [
      {
        id: 10,
        title: 'Help',
        href: '/help',
        icon: <HelpCircle />,
      },
      {
        id: 11,
        title: 'Mail',
        href: '/mail',
        icon: <Mail />,
      },
    ],
  },
]

const NotificationIcon = () => {
  const unreadCount = useAppStore(selectUnreadCount)
  return (
    <BadgeContainer aria-hidden>
      <Bell />
      {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
    </BadgeContainer>
  )
}

export const SidebarNavigation = () => (
  <MidasNavigation items={sections}>
    {section => (
      <NavigationSection
        title={section.title}
        items={section.children}
      >
        {function renderItem({ ariaLabel, href, icon, title, children }) {
          const resolvedIcon = title === 'Notifications' ? <NotificationIcon /> : icon
          const resolvedAriaLabel = title === 'Notifications'
            ? undefined  // NotificationIcon handles aria via BadgeContainer
            : ariaLabel

          return (
            <NavigationItem>
              <NavLink
                aria-label={resolvedAriaLabel}
                href={href}
                icon={resolvedIcon}
              >
                {title}
              </NavLink>
              <NavigationSubMenu items={children}>
                {renderItem}
              </NavigationSubMenu>
            </NavigationItem>
          )
        }}
      </NavigationSection>
    )}
  </MidasNavigation>
)

export const BottomNavigation = () => {
  const unreadCount = useAppStore(selectUnreadCount)

  return (
    <MidasNavigation>
      <NavigationItem>
        <NavLink href='/' icon={<House />}>Home</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink href='/applications' icon={<FileText />}>Applications</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink href='/profile' icon={<User />}>Profile</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink
          aria-label={unreadCount > 0 ? `Notifications, ${unreadCount} unread` : 'Notifications'}
          href='/notifications'
          icon={
            <BadgeContainer aria-hidden>
              <Bell />
              {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
            </BadgeContainer>
          }
        >
          Notifications
        </NavLink>
      </NavigationItem>
    </MidasNavigation>
  )
}
