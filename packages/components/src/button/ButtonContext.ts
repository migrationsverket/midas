'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { ButtonProps } from './Button'

/**
 * Provide default props to every Midas `Button` below it. Props set directly
 * on a `Button` take precedence over the context.
 */
export const ButtonContext =
  createContext<ContextValue<ButtonProps, HTMLButtonElement>>(null)
