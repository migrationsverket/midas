'use client'

import { ReactNode } from 'react'
import {
  Navigation as MidasNavigation,
  NavigationHeader,
  NavigationItem,
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
import { Collection, Key } from 'react-aria-components'

type SectionOrItem = Section | Item

type Section = {
  id: Key
  title?: string
  children: SectionOrItem[]
}

type Item = {
  id: Key
  title: string
  href: string
  icon?: ReactNode
  children?: SectionOrItem[]
}

const navItems: SectionOrItem[] = [
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

const isLink = (sectionOrItem: SectionOrItem): sectionOrItem is Item =>
  'href' in sectionOrItem && 'title' in sectionOrItem

export const Navigation = () => (
  <MidasNavigation items={navItems}>
    {function renderItem(item) {
      return (
        <NavigationItem>
          {isLink(item) ? (
            <NavLink
              href={item.href}
              title={item.title}
            >
              {item.icon}
            </NavLink>
          ) : (
            <NavigationHeader>{item.title}</NavigationHeader>
          )}
          {item.children?.length && (
            <NavigationSubMenu>
              <Collection items={item.children}>{renderItem}</Collection>
            </NavigationSubMenu>
          )}
        </NavigationItem>
      )
    }}
  </MidasNavigation>
)
