'use client'

import { ReactNode } from 'react'
import { useAppStore } from '../../store/useAppStore'
import { DismissPanelProvider } from '@midas-ds/layout'

export const AppLayoutProvider = ({ children }: { children: ReactNode }) => {
  const panelBehavior = useAppStore(s => s.panelBehavior)

  return (
    <DismissPanelProvider
      panelBehavior={panelBehavior}
      defaultPanels={[
        {
          id: '0',
          title: 'Testing dismissable panels',
          children: 'This is a default open panel',
        },
      ]}
    >
      {children}
    </DismissPanelProvider>
  )
}
