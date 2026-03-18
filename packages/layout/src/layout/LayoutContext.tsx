'use client'

import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { DismissPanelProps } from '../panel'

export interface LayoutContextValue {
  panels: DismissPanelProps[]
  setPanels: Dispatch<SetStateAction<DismissPanelProps[]>>
}

export const LayoutContext = createContext<LayoutContextValue>({
  panels: [],
  setPanels: () => {
    // noop
  },
})

/**
 *
 * Append a dismissable panel in your `LayoutContent` component
 */
export const usePanels = () => {
  const context = useContext(LayoutContext)
  if (!context) throw new Error('usePanel must be used within LayoutProvider')
  return context
}
