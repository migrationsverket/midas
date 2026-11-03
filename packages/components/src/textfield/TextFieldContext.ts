'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { TextFieldBaseProps } from './TextFieldBase'

/**
 * Provide default props to every Midas `TextField` below it. Props set directly
 * on a `TextField` take precedence over the context.
 */
export const TextFieldContext =
  createContext<ContextValue<TextFieldBaseProps, HTMLDivElement>>(null)
