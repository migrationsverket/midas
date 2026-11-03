'use client'

import type { Context } from 'react'
import { mergeProps } from 'react-aria'
import {
  type ContextValue,
  type SlotProps,
  useSlottedContext,
} from 'react-aria-components'

/**
 * `useContextProps` for components that don't forward a ref. Merges the props
 * from the context with the component's own, the component's own win.
 */
export const useContextPropsWithoutRef = <T, U, E extends Element>(
  props: T,
  context: Context<ContextValue<U, E>>,
): T => {
  const contextProps = {
    ...useSlottedContext(context, (props as SlotProps).slot),
  }
  // There's no ref to merge it with
  delete (contextProps as { ref?: unknown }).ref
  return mergeProps(contextProps, props as object) as T
}
