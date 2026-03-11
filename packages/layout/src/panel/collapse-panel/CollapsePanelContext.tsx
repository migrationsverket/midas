'use client'

import { createContext } from 'react'
import { PanelProps } from '../Panel'

export type CollapsePanelContextValue = Pick<
  PanelProps<'collapse'>,
  'isCollapsed'
>

export const CollapsePanelContext = createContext<CollapsePanelContextValue>({
  isCollapsed: false,
})
