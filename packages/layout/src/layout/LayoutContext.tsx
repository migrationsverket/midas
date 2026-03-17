'use client'

import { createContext, useContext } from 'react'
import { DismissPanelProps } from '../panel'

export interface LayoutContextValue {
  panel: DismissPanelProps | null
  setPanel: (panel: DismissPanelProps | null) => void
}

export const LayoutContext = createContext<LayoutContextValue>({
  panel: null,
  setPanel: () => {
    // noop
  },
})

/**
 *
 * Append a dismissable panel in your `LayoutContent` component
 */
export const usePanel = () => {
  const context = useContext(LayoutContext)
  if (!context) throw new Error('usePanel must be used within LayoutProvider')
  return context
}
