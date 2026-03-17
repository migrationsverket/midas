import { ReactNode, useState } from 'react'
import { LayoutContext } from './LayoutContext'
import { DismissPanelProps } from '../panel'

export interface LayoutProviderProps {
  children: ReactNode
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [panel, setPanel] = useState<DismissPanelProps | null>(null)

  return (
    <LayoutContext.Provider value={{ panel, setPanel }}>
      {children}
    </LayoutContext.Provider>
  )
}
