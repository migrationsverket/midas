'use client'

import styles from './Layout.module.css'
import { LucideIcon } from 'lucide-react'
import { FlexItem } from '../flex'
import * as React from 'react'
import clsx from 'clsx'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { SkipLink } from './components/SkipLink'

export interface SidebarLinkGroup {
  title?: string
  items: SidebarLinkProps[]
}

export interface SidebarLinkProps {
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

export interface App {
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
