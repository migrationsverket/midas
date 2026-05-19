'use client'

import { createContext } from 'react'
import { PanelProps } from './Panel'
import { PanelVariant } from './PanelProvider'

export interface PanelItem extends PanelProps {
  promoting?: boolean
}

export interface PanelContextValue {
  panels: PanelItem[]
  panelVariant: PanelVariant
  addPanel: (panel: Omit<PanelItem, 'isOpen' | 'defaultOpen'>) => void
  closePanel: (id: string) => void
  removePanel: (id: string) => void
  resetPromoting: (id: string) => void
}

export const PanelContext = createContext<PanelContextValue>({
  panels: [],
  panelVariant: 'overlay',
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
