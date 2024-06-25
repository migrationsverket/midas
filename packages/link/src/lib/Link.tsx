import React from 'react'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider,
} from 'react-aria-components'
import styles from './Link.module.css'

interface MvdsLinkProps extends LinkProps {
  /** Link button color
   *  @default "primary"
   *  */
  variant?: 'primary' | 'secondary'
}

/**
 * Link will take you anywhere
 * */
export const Link: React.FC<MvdsLinkProps> = ({
  variant = 'primary',
  ...rest
}) => {
  const variantClass =
    variant === 'primary'
      ? styles['variant-primary']
      : styles['variant-secondary']
  return (
    <AriaLink
      {...rest}
      className={`${styles.link} ${variantClass}`}
    />
  )
}

export { RouterProvider }
