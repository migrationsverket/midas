'use client'

import { ReactNode, useState } from 'react'
import { PanelContext, type PanelItem } from './PanelContext'

export type PanelBehavior = 'replace' | 'bring-to-front' | 'pop-to'
export type PanelVariant = 'overlay' | 'push'

export interface PanelProviderProps {
  children: ReactNode
  /** Panels to open on mount. */
  defaultPanels?: PanelItem[]
  /**
   * Behaviour when opening a panel that is already open.
   *
   * - `replace` — Replaces all existing panels. Recommended for most use cases.
   * - `bring-to-front` — Panels stack; opening an existing panel moves it to the front.
   * - `pop-to` — Opening an existing panel closes all panels above it.
   *
   * Showing one panel at a time is recommended. `replace` reflects this as the default.
   * Use `bring-to-front` or `pop-to` only when multiple simultaneous panels are justified.
   *
   * @default 'replace'
   */
  panelBehavior?: PanelBehavior
  /**
   * How the panel is displayed relative to the main content.
   *
   * - `overlay` — Panel overlays the main content without affecting its width.
   * - `push` — Panel pushes the main content aside, reducing its available width.
   *
   * @default 'overlay'
   */
  panelVariant?: PanelVariant
}

export const PanelProvider = ({
  children,
  defaultPanels = [],
  panelBehavior = 'replace',
  panelVariant = 'overlay',
}: PanelProviderProps) => {
  const [panels, setPanels] = useState<PanelItem[]>(
    defaultPanels.map(p => ({ ...p, isOpen: true, defaultOpen: true })),
  )

  const addPanel = (panel: PanelItem) => {
    setPanels((prev): PanelItem[] => {
      if (panelBehavior === 'replace') {
        return [{ ...panel, isOpen: true }]
      }

      const existingIndex = prev.findIndex(p => p.id === panel.id)

      if (existingIndex === -1) {
        return [...prev, { ...panel, isOpen: true }]
      }

      if (panelBehavior === 'bring-to-front') {
        if (existingIndex === prev.length - 1) return prev
        const existing = prev[existingIndex]
        return [
          ...prev.filter(p => p.id !== panel.id),
          { ...existing, isOpen: true, promoting: true },
        ]
      }

      if (panelBehavior === 'pop-to') {
        return prev.map((p, i) =>
          i > existingIndex ? { ...p, isOpen: false } : p,
        )
      }

      return prev
    })
  }

  const closePanel = (id: string) => {
    setPanels(prev =>
      prev.map(p => (p.id === id ? { ...p, isOpen: false } : p)),
    )
  }

  const removePanel = (id: string) => {
    setPanels(prev => prev.filter(p => p.id !== id))
  }

  const resetPromoting = (id: string) => {
    setPanels(prev =>
      prev.map(p => (p.id === id ? { ...p, promoting: false } : p)),
    )
  }

  return (
    <PanelContext.Provider
      value={{ panels, panelVariant, addPanel, closePanel, removePanel, resetPromoting }}
    >
      {children}
    </PanelContext.Provider>
  )
}
