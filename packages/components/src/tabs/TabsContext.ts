import { createContext } from 'react'
import { type TabsProps } from './Tabs'

export type TabsContextValue = Pick<TabsProps, 'variant' | 'size'>

export const TabsContext = createContext<TabsContextValue>({
  variant: 'uncontained',
  size: 'large',
})
