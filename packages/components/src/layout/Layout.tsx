'use client'

import styles from './Layout.module.css'
import {
  LucideIcon,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from 'lucide-react'
import { RouterProvider } from '../link-button'
import { Button } from '../button'
import { FlexItem } from '../flex'
import { Logo } from '../logo'
import * as React from 'react'
import clsx from 'clsx'
import { midasColors } from '../theme'
import { Dropdown, DropdownItem } from '../dropdown'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../tooltip'

export interface SidebarLinkGroup {
  title?: string
  items: SidebarLink[]
}

export interface SidebarLink {
  title: string
  href: string
  icon: LucideIcon
  active?: boolean
  isCollapsed?: boolean
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SidebarUser {
  name: string
  title: string
}

type HEX = `#${string}`

interface App {
  name: string
  color?: HEX
}

export interface MidasLayout {
  /** The menu items/item groups */
  items: SidebarLinkGroup[]
  /** Title displayed at the top of the application header */
  title: string
  children: React.ReactNode
  /** List of links in the top right of the application header */
  headerChildren?: React.ReactNode
  /** Current user details */
  user: SidebarUser
  /** Name of the app */
  app: App
  /** Provide the layout with your router for client side navigation
   *
   * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/}
   */

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
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  clientSideRouter?: (path: string, routerOptions: undefined) => void
}

export const Layout: React.FC<MidasLayout> = ({
  items,
  title,
  user,
  app,
  children,
  headerChildren,
  clientSideRouter,
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
      <SkipLink />
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
          setIsOpened={setIsOpened}
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
  setIsOpened,
  clientSideRouter,
}) => {
  const LinkTree = ({ group }: { group: SidebarLinkGroup }) => {
    return (
      <ul className={styles.list}>
        {group.items.map((link, i) => (
          <li
            key={'link_' + i}
            className={clsx(
              styles.listItem,
              isCollapsed && styles.listItemCollapsed,
            )}
          >
            <SidebarLink
              {...link}
              isCollapsed={isCollapsed}
              setIsOpened={setIsOpened}
            />
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
        isOpened && styles.sidebarOpened,
      )}
    >
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
        {!isCollapsed && <p className={styles.appName}>{app.name}</p>}
        <Button
          variant='tertiary'
          aria-label={isCollapsed ? 'Maximera sidomenyn' : 'Minimera sidomenyn'}
          onPress={() => setIsCollapsed(!isCollapsed)}
          className={styles.collapseButton}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
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
  setIsCollapsed,
}) => {
  return (
    <header
      className={styles.header}
      style={{
        borderTop: `solid 4px ${app.color ? app.color : midasColors.logoPrimary}`,
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
      {headerChildren && (
        <>
          <div className={styles.headerItems}>{headerChildren}</div>
          <div className={styles.headerMenu}>
            <Dropdown label='Öppna meny'>
              {React.Children.map(headerChildren, child => (
                <DropdownItem>{child}</DropdownItem>
              ))}
            </Dropdown>
          </div>
        </>
      )}
    </header>
  )
}

const SidebarLink = ({
  title,
  href,
  active,
  icon: IconComponent,
  isCollapsed,
  setIsOpened,
}: SidebarLink & {
  isCollapsed: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [showText, setShowText] = React.useState(false)

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!isCollapsed) {
      timeoutId = setTimeout(() => {
        setShowText(true)
      }, 100)
    } else {
      setShowText(false)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isCollapsed])

  if (isCollapsed)
    return (
      <TooltipTrigger>
        <Link
          href={href}
          aria-label={title}
          className={clsx(
            styles.listLink,
            styles.listLinkCollapsed,
            active && styles.active,
          )}
          onPressChange={() => setIsOpened(false)}
        >
          <IconComponent
            size={20}
            aria-label={title}
          />
        </Link>
        <Tooltip placement='right'>{title}</Tooltip>
      </TooltipTrigger>
    )

  return (
    <Link
      href={href}
      aria-label={title}
      className={clsx(styles.listLink, active && styles.active)}
      onPressChange={() => setIsOpened(false)}
    >
      <IconComponent size={20} />
      {showText && <span className={styles.linkText}>{title}</span>}
    </Link>
  )
}

const SkipLink: React.FC = ({ id = 'main:first-of-type' }: { id?: string }) => {
  const handleSkipToContent = () => {
    const container: HTMLElement | null = document.querySelector(id)

    if (container) {
      container.tabIndex = -1
      container.focus()
      setTimeout(() => container.removeAttribute('tabindex'), 1000)
    }
  }

  return (
    <Button
      onPress={handleSkipToContent}
      className={styles.skipToContent}
    >
      Hoppa till huvudinnehåll
    </Button>
  )
}
