'use client'

import styles from './Layout.module.css'
import {
  LucideIcon,
  Menu,
  PanelLeftClose,
  PanelRightClose,
  X
} from 'lucide-react'
import { LinkButton, RouterProvider } from '../link-button'
import { Button } from '../button'
import { FlexItem } from '../flex'
import { Logo } from '../logo'
import React from 'react'
import clsx from 'clsx'
import { midasColors } from '../theme'
import { Dropdown, DropdownItem } from '../dropdown'

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
}

type HEX = `#${string}`

interface App {
  name: string
  shortName: string
  color?: HEX
}

export interface MidasLayout {
  items: SidebarLinkGroup[]
  title: string
  children: React.ReactNode
  headerChildren: React.ReactNode
  user: SidebarUser
  app: App
  clientSideRouter?: (path: string, routerOptions: undefined) => void
}

export interface MidasHeader {
  title: string
  headerChildren: React.ReactNode
  user: SidebarUser
  app: App
  isOpened?: boolean
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>
  setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface MidasSidebar {
  items: SidebarLinkGroup[]
  app: App
  isOpened?: boolean
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  clientSideRouter?: (path: string, routerOptions: undefined) => void
}

export const Layout: React.FC<MidasLayout> = ({
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

  return (
    <div className={styles.baseLayout}>
      <Header
        title={title}
        headerChildren={headerChildren}
        user={user}
        app={app}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        setIsCollapsed={setIsCollapsed}
      />
      <div className={styles.mainContent}>
        <Sidebar
          items={items}
          app={app}
          isOpened={isOpened}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          clientSideRouter={clientSideRouter}
        />
        <FlexItem>
          <main className={styles.main}>
            <div className={styles.app}>{children}</div>
          </main>
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

export const Sidebar: React.FC<MidasSidebar> = ({
  items,
  app,
  isOpened,
  isCollapsed,
  setIsCollapsed,
  clientSideRouter
}) => {
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
              variant='tertiary'
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

  return (
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
          variant='tertiary'
          aria-label={isCollapsed ? 'Maximera sidomenyn' : 'Minimera sidomenyn'}
          onPress={() => setIsCollapsed(!isCollapsed)}
          className={styles.collapseButton}
        >
          {isCollapsed ? <PanelRightClose /> : <PanelLeftClose />}
        </Button>
      </div>
    </aside>
  )
}

export const Header: React.FC<MidasHeader> = ({
  title,
  user,
  app,
  headerChildren,
  isOpened,
  setIsOpened,
  setIsCollapsed
}) => {
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
        {isOpened !== undefined && setIsCollapsed && setIsOpened && (
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
        )}
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
