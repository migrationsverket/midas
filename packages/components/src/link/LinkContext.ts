'use client'

import { createContext } from 'react'
import type { ContextValue, SlotProps } from 'react-aria-components'
import type { LinkComponentProps } from './Link'

export type LinkContextProps = Partial<
  Omit<LinkComponentProps<React.ElementType>, 'children'>
> &
  SlotProps

/**
 * Provide default props to every Midas `Link` below it. Props set directly
 * on a `Link` take precedence over the context.
 */
export const LinkContext =
  createContext<ContextValue<LinkContextProps, HTMLAnchorElement>>(null)
