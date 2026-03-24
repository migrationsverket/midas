'use client'

import { useContext } from 'react'
import { DismissPanelContext } from './DismissPanelContext'

export const useDismissPanels = () => {
  const context = useContext(DismissPanelContext)
  if (!context)
    throw new Error(
      'useDismissPanels must be used within a DismissPanelContext',
    )
  return context
}
