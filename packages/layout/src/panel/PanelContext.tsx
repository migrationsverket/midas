import { createContext } from 'react'
import { type PanelProps } from '.'

export type PanelContextValue = Pick<PanelProps, 'isCollapsed'>

export const PanelContext = createContext<PanelContextValue>({
  isCollapsed: false,
})
