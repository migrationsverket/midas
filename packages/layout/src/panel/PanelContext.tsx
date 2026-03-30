'use client'

import { createContext } from 'react'
import { PanelProps } from './Panel'

export interface PanelItem extends PanelProps {
  promoting?: boolean
}

export interface PanelContextValue {
  panels: PanelItem[]
  addPanel: (panel: Omit<PanelItem, 'isOpen' | 'defaultOpen'>) => void
  closePanel: (id: string) => void
  removePanel: (id: string) => void
  resetPromoting: (id: string) => void
}

export const PanelContext = createContext<PanelContextValue>({
  panels: [],
  addPanel: () => {
    /* noop */
  },
  closePanel: () => {
    /* noop */
  },
  removePanel: () => {
    /* noop */
  },
  resetPromoting: () => {
    /* noop */
  },
})
