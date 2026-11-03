'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { DateRangePickerProps } from './DateRangePicker'

/**
 * Provide default props to every Midas `DateRangePicker` below it. Props set directly
 * on a `DateRangePicker` take precedence over the context.
 */
export const DateRangePickerContext =
  createContext<ContextValue<DateRangePickerProps, HTMLDivElement>>(null)
