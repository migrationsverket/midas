'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { DateValue } from 'react-aria-components'
import type { DateFieldProps } from './DateField'

/**
 * Provide default props to every Midas `DateField` below it. Props set directly
 * on a `DateField` take precedence over the context.
 */
export const DateFieldContext =
  createContext<ContextValue<DateFieldProps<DateValue>, HTMLDivElement>>(null)
