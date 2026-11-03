'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { TimeValue } from 'react-aria-components'
import type { TimeFieldProps } from './TimeField'

/**
 * Provide default props to every Midas `TimeField` below it. Props set directly
 * on a `TimeField` take precedence over the context.
 */
export const TimeFieldContext =
  createContext<ContextValue<TimeFieldProps<TimeValue>, HTMLDivElement>>(null)
