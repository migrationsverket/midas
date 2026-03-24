'use client'

import { useContext } from 'react'
import { DismissPanelContext } from './DismissPanelContext'

export const useDismissPanels = () => {
  return useContext(DismissPanelContext)
}
