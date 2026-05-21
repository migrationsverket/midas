'use client'

import { createContext } from 'react'
import { PanelProps } from './Panel'
import { PanelVariant } from './PanelProvider'

export interface PanelItem extends PanelProps {
  promoting?: boolean
}

export interface PanelContextValue {
  /** The current list of panels. */
  panels: PanelItem[]
  /** The active panel variant inherited from `PanelProvider`. */
  panelVariant: PanelVariant
  /** Opens or activates a panel. If a panel with the same id exists, it is updated in place. */
  addPanel: (panel: Omit<PanelItem, 'isOpen' | 'defaultOpen'>) => void
  /** Closes a panel, triggering the exit animation. */
  closePanel: (id: string) => void
  /** Permanently removes a panel from state. */
  removePanel: (id: string) => void
  resetPromoting: (id: string) => void
}

/** @internal — exists solely for PropTable introspection of usePanels return value */
export const UsePanels = (_: PanelContextValue) => null
UsePanels.displayName = 'usePanels'

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
