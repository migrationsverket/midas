'use client'

import React from 'react'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider
} from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'
import { type MidasButtonProps, ButtonStyles } from '@midas-ds/button'

type MidasLinkProps = MidasButtonProps & LinkProps

/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export const LinkButton: React.FC<MidasLinkProps> = ({
  variant = 'primary',
  fullwidth,
  size,
  icon: IconComponent,
  iconSize,
  iconPlacement,
  ...rest
}) => {
  const effectiveIconSize =
    size === 'small' ? 14 : iconSize || 16 /**Default size if not specified */

  return (
    <AriaLink
      className={clsx(
        ButtonStyles.button,
        variant === 'primary' && ButtonStyles.primary,
        variant === 'secondary' && ButtonStyles.secondary,
        variant === 'tertiary' && ButtonStyles.tertiary,
        variant === 'danger' && ButtonStyles.danger,
        variant === 'icon' && ButtonStyles.iconBtn,
        fullwidth && styles.fullwidth,
        size === 'small' && ButtonStyles.small,
        iconPlacement === 'right' ? styles.iconRight : styles.iconLeft,
        styles.link,
        rest.className
      )}
      {...rest}
    >
      <>
        {IconComponent && <IconComponent size={effectiveIconSize} />}
        {rest.children}
      </>
    </AriaLink>
  )
}

export { RouterProvider }
