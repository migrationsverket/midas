'use client'

import { createContext } from 'react'
import { PanelProps, PanelVariant } from '.'

export type PanelContextValue<T extends PanelVariant> = Pick<
  PanelProps<T>,
  'variant'
>

export const PanelContext = createContext<PanelContextValue<PanelVariant>>({
  variant: undefined,
})
