'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { CheckboxProps } from './Checkbox'

/**
 * Provide default props to every Midas `Checkbox` below it. Props set directly
 * on a `Checkbox` take precedence over the context.
 */
export const CheckboxContext =
  createContext<ContextValue<CheckboxProps, HTMLLabelElement>>(null)
