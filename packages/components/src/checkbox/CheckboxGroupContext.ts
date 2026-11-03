'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { CheckboxGroupProps } from './CheckboxGroup'

/**
 * Provide default props to every Midas `CheckboxGroup` below it. Props set directly
 * on a `CheckboxGroup` take precedence over the context.
 */
export const CheckboxGroupContext =
  createContext<ContextValue<CheckboxGroupProps, HTMLDivElement>>(null)
