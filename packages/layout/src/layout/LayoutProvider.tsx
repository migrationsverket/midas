'use client'

import { ReactNode, SetStateAction } from 'react'
import { LayoutContext } from './LayoutContext'
import { DismissPanelProps } from '../panel'
import { useControlledState } from '@react-stately/utils'

export interface LayoutProviderProps<T = DismissPanelProps[]> {
  children: ReactNode
  panels?: T
  defaultPanels?: T
  setPanels?: (panels: T) => void
}

export const LayoutProvider = ({ children, ...props }: LayoutProviderProps) => {
  const [panels, setPanels] = useControlledState(
    props.panels,
    props.defaultPanels || [],
    props.setPanels,
  )

  const setUniquePanels = (action: SetStateAction<DismissPanelProps[]>) => {
    setPanels(prev => {
      const next = typeof action === 'function' ? action(prev) : action
      const seen = new Set()
      const deduped: DismissPanelProps[] = []

      for (let i = next.length - 1; i >= 0; i--) {
        const item = next[i]
        const { id } = item

        if (!seen.has(id)) {
          seen.add(id)
          deduped.unshift(item)
        }
      }

      return deduped
    })
  }

  return (
    <LayoutContext.Provider value={{ panels, setPanels: setUniquePanels }}>
      {children}
    </LayoutContext.Provider>
  )
}
