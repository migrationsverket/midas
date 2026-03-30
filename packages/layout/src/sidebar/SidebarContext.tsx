'use client'

import { createContext } from 'react'
import { type SidebarProps } from './Sidebar'

export type SidebarContextValue = Pick<SidebarProps, 'isCollapsed'>

export const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined,
)
