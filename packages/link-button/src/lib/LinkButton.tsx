'use client'

import React from 'react'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider
} from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'

interface MidasLinkProps extends LinkProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
  fullwidth?: boolean
  iconPlacement?: 'left' | 'right'
}

/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export const LinkButton: React.FC<MidasLinkProps> = ({
  children,
  variant,
  fullwidth,
  iconPlacement,
  ...rest
}) => {
  return (
    <AriaLink
      className={clsx(
        styles.linkButton,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'tertiary' && styles.tertiary,
        variant === 'danger' && styles.danger,
        fullwidth && styles.fullwidth,
        iconPlacement === 'left' && styles.iconLeft,
        rest.className
      )}
      {...rest}
    >
      {children}
      <ChevronRight
        size={20}
        className={styles.icon}
      />
    </AriaLink>
  )
}

export { RouterProvider }
