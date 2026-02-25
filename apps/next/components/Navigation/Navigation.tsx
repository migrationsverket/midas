'use client'

import { ReactNode } from 'react'
import {
  Navigation as MidasNavigation,
  NavigationHeader,
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
} from 'lucide-react'
import { NavLink } from '../NavLink'
import { Key } from 'react-aria-components'

type Section = {
  id: Key
  title?: string
  children: Item[]
}

type Item = {
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

export const SidebarNavigation = () => (
  <MidasNavigation items={sections}>
    {section => (
      <NavigationSection
        title={section.title}
        items={section.children}
      >
        {function renderItem(item) {
          return (
            <NavigationItem>
              <NavLink
                href={item.href}
                title={item.title}
              >
                {item.icon}
              </NavLink>
              <NavigationSubMenu items={item.children}>
                {renderItem}
              </NavigationSubMenu>
            </NavigationItem>
          )
        }}
      </NavigationSection>
    )}
  </MidasNavigation>
)

export const BottomNavigation = () => (
  <MidasNavigation>
    <NavigationItem>
      <NavLink
        href='/'
        title='Home'
        // TODO: could the variant be context aware?
        variant='navbar'
      >
        <House />
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink
        href='/applications'
        title='Applications'
        // TODO: could the variant be context aware?
        variant='navbar'
      >
        <FileText />
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink
        href='/profile'
        title='Profile'
        // TODO: could the variant be context aware?
        variant='navbar'
      >
        <User />
      </NavLink>
    </NavigationItem>
  </MidasNavigation>
)
