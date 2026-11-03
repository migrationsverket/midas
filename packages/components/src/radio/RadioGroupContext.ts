'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { RadioGroupProps } from './RadioGroup'

/**
 * Provide default props to every Midas `RadioGroup` below it. Props set directly
 * on a `RadioGroup` take precedence over the context.
 */
export const RadioGroupContext =
  createContext<ContextValue<RadioGroupProps, HTMLDivElement>>(null)
