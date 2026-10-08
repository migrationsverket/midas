import * as React from 'react'
import { SidebarLinkGroup, SidebarUser, App } from '../Layout'
import type { LinkProps } from 'react-aria-components'

/**
 * A link target, typed by the app's React Aria router config if it has one.
 * The same type as `Href` in @react-types/shared, taken from a package we
 * depend on so it resolves in consumers' type checks.
 */
export type Href = NonNullable<LinkProps['href']>

export interface LayoutContextProps {
  items: SidebarLinkGroup[]
  title: string
  user: SidebarUser
  app: App
  headerChildren: React.ReactNode
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  isOpened?: boolean
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>
  clientSideRouter?: (path: string, routerOptions: undefined) => void
  clientSideHref?: (href: Href) => string
  variant: 'internal' | 'external'
  id: string
}

const LayoutContext = React.createContext<LayoutContextProps | undefined>(
  undefined,
)

export const LayoutProvider: React.FC<
  LayoutContextProps & { children: React.ReactNode }
> = ({
  items,
  title,
  user,
  app,
  children,
  clientSideRouter,
  clientSideHref,
  headerChildren,
  isCollapsed,
  setIsCollapsed,
  isOpened,
  setIsOpened,
  variant,
  id,
}) => {
  return (
    <LayoutContext.Provider
      value={{
        items,
        title,
        user,
        app,
        headerChildren,
        isCollapsed,
        setIsCollapsed,
        isOpened,
        setIsOpened,
        clientSideRouter,
        clientSideHref,
        variant,
        id,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  const context = React.useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider')
  }
  return context
}
