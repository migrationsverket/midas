'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { ComboBoxProps } from './ComboBox'

/**
 * Provide default props to every Midas `ComboBox` below it. Props set directly
 * on a `ComboBox` take precedence over the context.
 */
export const ComboBoxContext =
  createContext<ContextValue<Partial<ComboBoxProps<object>>, HTMLDivElement>>(
    null,
  )
