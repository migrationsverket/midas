'use client'

import React from 'react'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  SquareArrowOutUpRight
} from 'lucide-react'

interface MidasLinkProps<C extends React.ElementType> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  fullwidth?: boolean
  iconPlacement?: 'left' | 'right'
  icon?: LucideIcon /**Optional icon prop */
  className?: string
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
        className
      )}
      {...rest}
    >
      {children}
      <Icon />
    </Component>
  )
}

export { RouterProvider }
