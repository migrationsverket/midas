'use client'

import { ReactNode } from 'react'
import { LayoutProvider } from '@midas-ds/layout'
import { useAppStore } from '../../store/useAppStore'

export const AppLayoutProvider = ({ children }: { children: ReactNode }) => {
  const panelBehavior = useAppStore(s => s.panelBehavior)

  return (
    <LayoutProvider
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
    </LayoutProvider>
  )
}
