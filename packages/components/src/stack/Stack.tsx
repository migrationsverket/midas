'use client'

import * as React from 'react'
import clsx from '../utils/clsx'
import styles from './Stack.module.css'

/** The Midas semantic space tokens, `--midas-space-*` */
export type StackSpacing = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export type StackElementType =
  | 'div'
  | 'ul'
  | 'ol'
  | 'section'
  | 'nav'
  | 'fieldset'
  | 'form'
  | 'header'
  | 'footer'
  | 'aside'
  | 'article'

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  /**
   * The HTML element to render, e.g. `ul` for a list of items
   * @default 'div'
   */
  elementType?: StackElementType
  /** @default 'column' */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /**
   * Space between the items, from the Midas semantic space tokens
   * @default 'small'
   */
  spacing?: StackSpacing
  /**
   * How the items line up across the direction: horizontally in a column,
   * vertically in a row. `stretch` makes them as wide as the Stack in a
   * column and as tall as it in a row
   * @default 'stretch'
   */
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  /**
   * How the items are placed along the direction: vertically in a column,
   * horizontally in a row. `between` puts the first and last item at the
   * edges, `around` gives each item equal space on both sides and `evenly`
   * makes every gap the same, edges included
   * @default 'start'
   */
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** Let the items wrap onto several lines */
  wrap?: boolean
}

/**
 * Lays out its children in one direction, with spacing from the Midas space
 * tokens.
 *
 * @see {@link https://designsystem.migrationsverket.se/components/stack}
 */
export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      children,
      elementType = 'div',
      direction = 'column',
      spacing = 'small',
      alignItems = 'stretch',
      justifyContent = 'start',
      wrap = false,
      className,
      role,
      ...rest
    },
    ref,
  ) => {
    // A dynamic tag, typed as a div for JSX. The element is one of the
    // StackElementType tags, which all accept these props
    const Element = elementType as 'div'
    const isList = elementType === 'ul' || elementType === 'ol'

    return (
      <Element
        {...rest}
        ref={ref as React.Ref<HTMLDivElement>}
        // Without bullets, Safari drops the list semantics unless the role
        // is explicit
        role={role ?? (isList ? 'list' : undefined)}
        className={clsx(styles.stack, className)}
        data-direction={direction}
        data-align={alignItems}
        data-justify={justifyContent}
        data-wrap={wrap || undefined}
        data-spacing={spacing}
      >
        {children}
      </Element>
    )
  },
)

Stack.displayName = 'Stack'
