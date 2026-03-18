import { ReactNode, SetStateAction, useState } from 'react'
import { LayoutContext } from './LayoutContext'
import { DismissPanelProps } from '../panel'

export interface LayoutProviderProps {
  children: ReactNode
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [panels, setPanels] = useState<DismissPanelProps[]>([])

  const setUniqueState = (action: SetStateAction<DismissPanelProps[]>) => {
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
    <LayoutContext.Provider value={{ panels, setPanels: setUniqueState }}>
      {children}
    </LayoutContext.Provider>
  )
}
