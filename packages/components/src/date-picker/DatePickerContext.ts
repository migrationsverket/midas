'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { DateValue } from 'react-aria-components'
import type { DatePickerProps } from './DatePicker'

/**
 * Provide default props to every Midas `DatePicker` below it. Props set directly
 * on a `DatePicker` take precedence over the context.
 */
export const DatePickerContext =
  createContext<ContextValue<DatePickerProps<DateValue>, HTMLDivElement>>(null)
