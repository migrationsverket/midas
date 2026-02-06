import * as React from 'react'
import { SidebarLinkGroup, SidebarUser, App } from '../Layout'
import { Href } from '@react-types/shared'

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
