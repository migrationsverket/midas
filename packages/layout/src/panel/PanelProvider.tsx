'use client'

import { ReactNode, useState } from 'react'
import { PanelContext, type PanelItem } from './PanelContext'

export type PanelBehavior = 'replace' | 'bring-to-front' | 'pop-to'
export type PanelVariant = 'overlay' | 'push'

export interface PanelProviderProps {
  children: ReactNode
  defaultPanels?: PanelItem[]
  panelBehavior?: PanelBehavior
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
