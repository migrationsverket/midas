'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { MidasSelectProps, SelectionMode } from './Select'

/**
 * Provide default props to every Midas `Select` below it. Props set directly
 * on a `Select` take precedence over the context.
 */
export const SelectContext =
  createContext<
    ContextValue<
      Partial<MidasSelectProps<object, SelectionMode>>,
      HTMLDivElement
    >
  >(null)
