import { Fragment, ReactNode } from 'react'
import { Navigation as MidasNavigation } from '@midas-ds/layout'
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

type NavItem = {
  title?: string
  href?: string
  icon?: ReactNode
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    children: [
      {
        href: '/',
        title: 'Home',
        icon: <House />,
      },
      {
        href: '/applications',
        title: 'Applications',
        icon: <FileText />,
        children: [
          {
            children: [
              {
                href: '/applications/new',
                title: 'New application',
                icon: <Plus />,
              },
              {
                href: '/applications/drafts',
                title: 'Drafts',
                icon: <Save />,
              },
              {
                href: '/applications/sent',
                title: 'Sent',
                icon: <Send />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Account',
    children: [
      {
        href: '/profile',
        title: 'Profile',
        icon: <User />,
      },
    ],
  },
  {
    children: [
      {
        href: '/help',
        title: 'Help',
        icon: <HelpCircle />,
      },
      {
        href: '/mail',
        title: 'Mail',
        icon: <Mail />,
      },
    ],
  },
]

export const Navigation = () => (
  <MidasNavigation>
    {navItems.map(function renderNavItems(item, index) {
      return (
        <MidasNavigation.SubMenu
          title={item.title}
          key={item.title || '' + index}
        >
          {item.children?.map(({ href, title, icon, children }) => (
            <Fragment key={href}>
              {title && href && (
                <NavLink
                  href={href}
                  title={title}
                >
                  {icon}
                </NavLink>
              )}
              {children?.length && children.map(renderNavItems)}
            </Fragment>
          ))}
        </MidasNavigation.SubMenu>
      )
    })}
  </MidasNavigation>
)
