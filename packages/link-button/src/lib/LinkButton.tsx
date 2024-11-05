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
  children?: React.ReactNode
  isDisabled?: boolean
}

/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export const LinkButton: React.FC<MidasLinkProps> = ({
  children,
  isDisabled,
  ...rest
}) => {
  return (
    <AriaLink
      isDisabled={isDisabled}
      className={clsx(
        styles.linkButton,

        styles.link,
        rest.className
      )}
      {...rest}
    >
      {children}
      <ChevronRight
        size={20}
        className={styles.icon}
      ></ChevronRight>
    </AriaLink>
  )
}

export { RouterProvider }
