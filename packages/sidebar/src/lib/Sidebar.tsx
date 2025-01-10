'use client'

import styles from './Sidebar.module.css'
import {
  LucideIcon,
  Menu,
  PanelLeftClose,
  PanelRightClose,
  X
} from 'lucide-react'
import { LinkButton, RouterProvider } from '@midas-ds/link-button'
import { Button } from '@midas-ds/button'
import { FlexItem } from '@midas-ds/flex'
import { Logo } from '@midas-ds/logo'
import React from 'react'
import clsx from 'clsx'
import { midasColors } from '@midas-ds/theme'
import { Dropdown, DropdownItem } from '@midas-ds/dropdown'

export interface SidebarLinkGroup {
  title?: string
  items: SidebarLink[]
}

export interface SidebarLink {
  title: string
  href: string
  icon: LucideIcon
}

export interface SidebarUser {
  name: string
  title: string
  imageUrl?: string
}

type HEX = `#${string}`

export interface MidasSidebar {
  items: SidebarLinkGroup[]
  title: string
  children: React.ReactNode
  headerChildren: React.ReactNode
  user: SidebarUser
  app: { name: string; shortName: string; color?: HEX }
  clientSideRouter?: (path: string, routerOptions: undefined) => void
}

export const Sidebar: React.FC<MidasSidebar> = ({
  items,
  title,
  user,
  app,
  children,
  headerChildren,
  clientSideRouter
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false)
  const [isOpened, setIsOpened] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpened(false)
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const SidebarHeader = () => {
    return (
      <div className={styles.sidebarHeader}>
        {isCollapsed ? (
          <p className={styles.name}>{app.shortName}</p>
        ) : (
          <p className={styles.abbr}>{app.name}</p>
        )}
      </div>
    )
  }

  const LinkTree = ({ group }: { group: SidebarLinkGroup }) => {
    return (
      <ul className={styles.list}>
        {group.items.map((link, i) => (
          <li
            key={'link_' + i}
            className={clsx(
              styles.listItem,
              isCollapsed && styles.listItemCollapsed
            )}
          >
            <LinkButton
              iconPlacement='left'
              href={link.href}
              icon={link.icon}
              className={clsx(
                styles.listLink,
                isCollapsed && styles.listLinkCollapsed
              )}
              variant='primary'
            >
              <span
                className={clsx(
                  styles.linkText,
                  isCollapsed && styles.linkTextCollapsed
                )}
              >
                {link.title}
              </span>
            </LinkButton>
          </li>
        ))}
      </ul>
    )
  }

  const Header = () => {
    return (
      <header
        className={styles.header}
        style={{
          borderTop: `solid 4px ${app.color ? app.color : midasColors.logoPrimary}`
        }}
      >
        <div className={styles.headerContent}>
          <Logo
            padding={false}
            size='small'
            className={styles.logo}
          />
          <Button
            variant='icon'
            className={styles.toggleButton}
            aria-label={isOpened ? 'Stäng meny' : 'Öppna meny'}
            aria-controls='midasMainMenu'
            onPress={() => {
              setIsCollapsed(false)
              setIsOpened(!isOpened)
            }}
          >
            {isOpened ? (
              <X
                size={20}
                aria-hidden
              />
            ) : (
              <Menu
                size={20}
                aria-hidden
              />
            )}
          </Button>
          <div>
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userTitle}>{user.title}</p>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
        <div className={styles.headerItems}>{headerChildren}</div>
        <div className={styles.headerMenu}>
          <Dropdown>
            {React.Children.map(headerChildren, child => (
              <DropdownItem>{child}</DropdownItem>
            ))}
          </Dropdown>
        </div>
      </header>
    )
  }

  return (
    <div className={styles.baseLayout}>
      <Header />
      <div className={styles.mainContent}>
        <aside
          id='midasMainMenu'
          className={clsx(
            styles.sidebar,
            isCollapsed && styles.sidebarCollapsed,
            isOpened && styles.sidebarOpened
          )}
        >
          <SidebarHeader />
          <nav className={styles.sidebarNav}>
            <ul className={styles.list}>
              {items.map((group, i) => (
                <li key={'list_' + i}>
                  {group.title && !isCollapsed && (
                    <p className={styles.listGroupTitle}>{group.title}</p>
                  )}
                  {clientSideRouter ? (
                    <RouterProvider navigate={clientSideRouter}>
                      <LinkTree group={group} />
                    </RouterProvider>
                  ) : (
                    <LinkTree group={group} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.sidebarFooter}>
            <Button
              variant='primary'
              aria-label={
                isCollapsed ? 'Maximera sidomenyn' : 'Minimera sidomenyn'
              }
              onPress={() => setIsCollapsed(!isCollapsed)}
              className={styles.collapseButton}
            >
              {isCollapsed ? <PanelRightClose /> : <PanelLeftClose />}
            </Button>
          </div>
        </aside>
        <FlexItem>
          <main className={styles.main}>{children}</main>
        </FlexItem>
        <div
          className={clsx(styles.backdrop, isOpened && styles.backdropOpened)}
          onClick={() => setIsOpened(false)}
          aria-hidden
        />
      </div>
    </div>
  )
}
