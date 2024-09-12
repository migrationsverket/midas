'use client'

import React from 'react'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider,
} from 'react-aria-components'
import styles from './LinkButton.module.css'
import clsx from 'clsx'

interface MvdsLinkProps extends LinkProps {
  /** Link button color
   *  @default "primary"
   *  */
  variant?: 'primary' | 'secondary'
}

/**
 * Link will take you anywhere
 * */
export const LinkButton: React.FC<MvdsLinkProps> = ({
  variant = 'primary',
  ...rest
}) => {
  const variantClass =
    variant === 'primary'
      ? styles['variant-primary']
      : styles['variant-secondary']

  return (
    <AriaLink
      className={clsx(styles.link, variantClass)}
      {...rest}
    />
  )
}

export { RouterProvider }
