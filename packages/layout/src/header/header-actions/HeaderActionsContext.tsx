'use client'

import { createContext } from 'react'
import type { HeaderActionsProps } from './HeaderActions'

export interface HeaderActionsContextValue {
  orientation: NonNullable<HeaderActionsProps['orientation']>
}

export const HeaderActionsContext = createContext<HeaderActionsContextValue>({
  orientation: 'horizontal',
})
