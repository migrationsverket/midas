'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { HeadingProps } from './Heading'

/**
 * Provide default props to every Midas `Heading` below it. Props set directly
 * on a `Heading` take precedence over the context.
 */
export const HeadingContext =
  createContext<ContextValue<HeadingProps, HTMLHeadingElement>>(null)
