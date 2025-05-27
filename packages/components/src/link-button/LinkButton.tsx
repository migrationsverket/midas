'use client'

import React from 'react'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  SquareArrowOutUpRight,
} from 'lucide-react'

interface MidasLinkProps<C extends React.ElementType> {
  children: React.ReactNode
  /**
   * Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label
   *
   * @default 'primary'
   * */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  /**
   * Adds width: 100%; for the button to span entire width of parent
   *
   * @default false
   */
  fullwidth?: boolean
  /** Display the icon on the left or right side of the button text */

  iconPlacement?: 'left' | 'right'
  /** Add an icon from lucide-react
   *
   * @see {@link https://lucide.dev/icons/|Lucide}
   */
  icon?: LucideIcon /**Optional icon prop */
  className?: string
  /** Repace base component with any Client Side Routing link instead.
   * @link https://designsystem.migrationsverket.se/dev/client-side-routing/
   */
  as?: C
}

export type LinkButtonProps<C extends React.ElementType> = MidasLinkProps<C> &
  Omit<React.ComponentProps<C>, keyof MidasLinkProps<C>>

/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export const LinkButton = <C extends React.ElementType = typeof AriaLink>({
  children,
  variant,
  fullwidth,
  icon: IconComponent,
  iconPlacement,
  className,
  as,
  ...rest
}: LinkButtonProps<C>) => {
  const Component = as || AriaLink

  const Icon = () => {
    if (IconComponent)
      return (
        <IconComponent
          size={20}
          className={styles.icon}
        />
      )

    if (rest.target === '_blank')
      return (
        <SquareArrowOutUpRight
          size={20}
          className={styles.icon}
        />
      )
    if (iconPlacement === 'left')
      return (
        <ChevronLeft
          size={20}
          className={styles.icon}
        />
      )

    return (
      <ChevronRight
        size={20}
        className={styles.icon}
      />
    )
  }
  return (
    <Component
      className={clsx(
        styles.linkButton,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'tertiary' && styles.tertiary,
        variant === 'danger' && styles.danger,
        variant === 'icon' && styles.iconBtn,
        fullwidth && styles.fullwidth,
        iconPlacement === 'left' && styles.iconLeft,
        className,
      )}
      {...rest}
    >
      {children}
      <Icon />
    </Component>
  )
}

export { RouterProvider }
