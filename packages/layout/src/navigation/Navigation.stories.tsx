import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Navigation,
  NavigationItem,
  NavigationLink,
  NavigationSection,
  NavigationSubMenu,
} from '.'
import { FileText, House, Plus, Save, Send, User } from 'lucide-react'
import { type Key } from 'react-aria-components'
import { ReactNode } from 'react'

type Story<T extends object = Item> = StoryObj<typeof Navigation<T>>

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

const items: Record<string, Item> = {
  home: {
    id: 'home',
    title: 'Home',
    href: '/',
    icon: <House />,
  },
  applications: {
    id: 'applications',
    title: 'Applications',
    href: '/applications',
    icon: <FileText />,
  },
  newApplication: {
    id: 'new-application',
    title: 'New',
    href: '/applications/new',
    icon: <Plus />,
  },
  sentApplications: {
    id: 'sent-applications',
    title: 'Sent',
    href: '/applications/sent',
    icon: <Send />,
  },
  savedApplications: {
    id: 'saved-applications',
    title: 'Saved',
    href: '/applications/saved',
    icon: <Save />,
  },
  profile: {
    id: 'profile',
    title: 'Profile',
    href: '/profile',
    icon: <User />,
  },
} as const

const renderItem = ({ href, icon, title, children }: Item) => {
  return (
    <NavigationItem>
      <NavigationLink
        isActive={href === '/'}
        href={href}
        icon={icon}
      >
        {title}
      </NavigationLink>
      <NavigationSubMenu items={children}>{renderItem}</NavigationSubMenu>
    </NavigationItem>
  )
}

export default {
  component: Navigation,
  title: 'Layout/Navigation',
  // Navigation is context dependent and is best demonstrated in the Navbar or Sidebar
  tags: ['!autodocs', '!dev'],
} satisfies Meta<typeof Navigation<Item>>

export const Flat: Story = {
  args: {
    items: [items.home, items.profile, items.applications],
    children: renderItem,
  },
}

export const Nested: Story<Section> = {
  args: {
    items: [
      {
        id: 'general',
        children: [items.home, items.profile],
      },
      {
        id: 'applications',
        title: 'Applications',
        children: [
          {
            ...items.applications,
            children: [
              items.newApplication,
              items.sentApplications,
              items.savedApplications,
            ],
          },
        ],
      },
    ],
    children: section => (
      <NavigationSection
        title={section.title}
        items={section.children}
      >
        {renderItem}
      </NavigationSection>
    ),
  },
}
