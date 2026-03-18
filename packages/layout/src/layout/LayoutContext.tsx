'use client'

import { createContext, useContext } from 'react'
import { DismissPanelProps } from '../panel'

export interface PanelItem extends Omit<DismissPanelProps, 'isOpen'> {
  id: string
  isOpen: boolean
  skipEnterAnimation?: boolean
  promoting?: boolean
}

export interface LayoutContextValue {
  panels: PanelItem[]
  addPanel: (panel: Omit<PanelItem, 'isOpen' | 'skipEnterAnimation' | 'promoting'>) => void
  closePanel: (id: string) => void
  removePanel: (id: string) => void
  resetPromoting: (id: string) => void
}

export const LayoutContext = createContext<LayoutContextValue>({
  panels: [],
  addPanel: () => {},
  closePanel: () => {},
  removePanel: () => {},
  resetPromoting: () => {},
})

/**
 * Append a dismissable panel in your `LayoutContent` component
 */
export const usePanels = () => {
  const context = useContext(LayoutContext)
  if (!context) throw new Error('usePanels must be used within LayoutProvider')
  return context
}
