'use client'

import React from 'react'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  LucideProps,
  SquareArrowOutUpRight,
} from 'lucide-react'
import { Size } from '../common/types'

interface MidasLinkProps<C extends React.ElementType> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  fullwidth?: boolean
  iconPlacement?: 'left' | 'right'
  icon?: LucideIcon /**Optional icon prop */
  className?: string
  as?: C
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   **/
  size?: Size
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
  size = 'large',
  ...rest
}: LinkButtonProps<C>) => {
  const Component = as || AriaLink

  const Icon = ({ ...rest }: LucideProps) => {
    if (IconComponent) return <IconComponent {...rest} />
    if (rest.target === '_blank') return <SquareArrowOutUpRight {...rest} />
    if (iconPlacement === 'left') return <ChevronLeft {...rest} />

    return <ChevronRight {...rest} />
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
        size === 'medium' && styles.medium,
        fullwidth && styles.fullwidth,
        iconPlacement === 'left' && styles.iconLeft,
        className,
      )}
      {...rest}
    >
      {children}
      <Icon
        size={20}
        className={styles.icon}
      />
    </Component>
  )
}

export { RouterProvider }
