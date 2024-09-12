'use client'

import styles from './Link.module.css'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider,
} from 'react-aria-components'
import clsx from 'clsx'

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  className,
  isDisabled,
  ...rest
}) => {
  return (
    <AriaLink
      className={clsx(styles.link, className)}
      href={href}
      isDisabled={isDisabled}
      {...rest}
    >
      {children}
    </AriaLink>
  )
}

export { RouterProvider }
