'use client'

import { createContext } from 'react'
import type { ContextValue } from 'react-aria-components'
import type { SearchFieldProps } from './SearchField'

/**
 * Provide default props to every Midas `SearchField` below it. Props set directly
 * on a `SearchField` take precedence over the context.
 */
export const SearchFieldContext =
  createContext<ContextValue<Partial<SearchFieldProps>, HTMLDivElement>>(null)
