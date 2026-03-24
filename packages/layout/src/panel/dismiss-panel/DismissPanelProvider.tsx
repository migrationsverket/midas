'use client'

import { ReactNode, useState } from 'react'
import { type PanelItem, DismissPanelContext } from './DismissPanelContext'

export type PanelBehavior = 'bring-to-front' | 'pop-to'

export interface DismissPanelProviderProps {
  children: ReactNode
  defaultPanels?: PanelItem[]
  panelBehavior?: PanelBehavior
}

export const DismissPanelProvider = ({
  children,
  defaultPanels = [],
  panelBehavior = 'bring-to-front',
}: DismissPanelProviderProps) => {
  const [panels, setPanels] = useState<PanelItem[]>(
    defaultPanels.map(p => ({ ...p, isOpen: true, defaultOpen: true })),
  )

  const addPanel = (panel: PanelItem) => {
    setPanels((prev): PanelItem[] => {
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
    <DismissPanelContext.Provider
      value={{ panels, addPanel, closePanel, removePanel, resetPromoting }}
    >
      {children}
    </DismissPanelContext.Provider>
  )
}
