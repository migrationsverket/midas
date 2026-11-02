'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { TextProps } from './Text'

/**
 * Provide default props to every Midas `Text` below it. Props set directly
 * on a `Text` take precedence over the context.
 */
export const TextContext =
  createContext<ContextValue<TextProps, HTMLElement>>(null)
