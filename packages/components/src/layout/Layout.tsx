'use client'

import styles from './Layout.module.css'
import { LucideIcon } from 'lucide-react'
import { FlexItem } from '../flex'
import * as React from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { SidebarLink } from './components/SidebarLink'
import { SkipLink } from './components/SkipLink'
import { Href } from '@react-types/shared'
import { LayoutProvider } from './context/LayoutContext'
import { Backdrop } from './components/Backdrop'
import { Navbar } from './components/Navbar'

export interface SidebarLinkGroup {
  title?: string
  items: SidebarLinkProps[]
}

export interface SidebarLinkProps {
  title: string
  href: string
  icon: LucideIcon
  active?: boolean
  hasBadge?: boolean
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
  clientSideHref?: (href: Href) => string
  variant: 'internal' | 'external'
}

export const Layout: React.FC<MidasLayout> & {
  Provider: typeof LayoutProvider
  Header: typeof Header
  Sidebar: typeof Sidebar
  SidebarLink: typeof SidebarLink
  Navbar: typeof Navbar
  Backdrop: typeof Backdrop
} = ({
  items,
  title,
  user,
  app,
  children,
  headerChildren,
  clientSideRouter,
  clientSideHref,
  variant,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false)
  const [isOpened, setIsOpened] = React.useState<boolean>(false)

  if (variant === 'external')
    return (
      <Layout.Provider
        items={items}
        title={title}
        user={user}
        app={app}
        clientSideRouter={clientSideRouter}
        clientSideHref={clientSideHref}
        headerChildren={headerChildren}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        variant={variant}
      >
        <div className={styles.baseLayout}>
          <SkipLink />
          <Layout.Header />
          <div className={styles.mainContent}>
            <Layout.Sidebar />
            <FlexItem>
              <main className={styles.main}>
                <div className={styles.app}>{children}</div>
              </main>
            </FlexItem>
            <Layout.Backdrop />
          </div>
          <div className={styles.navbarWrapper}>
            <Layout.Navbar />
          </div>
        </div>
      </Layout.Provider>
    )

  return (
    <Layout.Provider
      items={items}
      title={title}
      user={user}
      app={app}
      clientSideRouter={clientSideRouter}
      clientSideHref={clientSideHref}
      headerChildren={headerChildren}
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
      isOpened={isOpened}
      setIsOpened={setIsOpened}
      variant={variant}
    >
      <div className={styles.baseLayout}>
        <SkipLink />
        <Layout.Header />
        <div className={styles.mainContent}>
          <Layout.Sidebar />
          <FlexItem>
            <main className={styles.main}>
              <div className={styles.app}>{children}</div>
            </main>
          </FlexItem>
          <Layout.Backdrop />
        </div>
      </div>
    </Layout.Provider>
  )
}

Layout.Provider = LayoutProvider
Layout.Header = Header
Layout.Sidebar = Sidebar
Layout.SidebarLink = SidebarLink
Layout.Navbar = Navbar
Layout.Backdrop = Backdrop
