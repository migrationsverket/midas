import { createContext } from 'react'
import { PanelProps } from '.'

export type PanelContextValue = Pick<PanelProps<'collapse'>, 'isCollapsed'>

export const PanelContext = createContext<PanelContextValue>({
  isCollapsed: false,
})
