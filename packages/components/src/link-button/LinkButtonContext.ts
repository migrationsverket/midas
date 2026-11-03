'use client'

import { createContext } from 'react'
import type { ContextValue, SlotProps } from 'react-aria-components'
import type { LinkButtonComponentProps } from './LinkButton'

export type LinkButtonContextProps = Partial<
  Omit<LinkButtonComponentProps<React.ElementType>, 'children'>
> &
  SlotProps

/**
 * Provide default props to every Midas `LinkButton` below it. Props set
 * directly on a `LinkButton` take precedence over the context.
 */
export const LinkButtonContext =
  createContext<ContextValue<LinkButtonContextProps, HTMLAnchorElement>>(null)
