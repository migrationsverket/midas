'use client'

import { createContext } from 'react'
import type { ToolbarProps } from 'react-aria-components'

export interface HeaderActionsContextValue {
  orientation: NonNullable<ToolbarProps['orientation']>
}

export const HeaderActionsContext = createContext<HeaderActionsContextValue>({
  orientation: 'horizontal',
})
