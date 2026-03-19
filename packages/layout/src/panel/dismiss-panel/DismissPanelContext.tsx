'use client'

import { createContext } from 'react'
import { DismissPanelProps } from '.'

export interface PanelItem extends DismissPanelProps {
  promoting?: boolean
}

export interface DismissPanelContextValue {
  panels: PanelItem[]
  addPanel: (panel: Omit<PanelItem, 'isOpen' | 'defaultOpen'>) => void
  closePanel: (id: string) => void
  removePanel: (id: string) => void
  resetPromoting: (id: string) => void
}

export const DismissPanelContext = createContext<DismissPanelContextValue>({
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
