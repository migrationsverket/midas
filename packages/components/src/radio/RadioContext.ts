'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { RadioProps } from './Radio'

/**
 * Provide default props to every Midas `Radio` below it. Props set directly
 * on a `Radio` take precedence over the context.
 */
export const RadioContext =
  createContext<ContextValue<Partial<RadioProps>, HTMLLabelElement>>(null)
