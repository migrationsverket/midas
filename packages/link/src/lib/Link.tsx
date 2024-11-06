'use client'

import styles from './Link.module.css'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider
} from 'react-aria-components'
import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'

interface MidasLink extends LinkProps {
  children: React.ReactNode
  standalone?: boolean
}

export const Link: React.FC<MidasLink> = ({
  children,
  standalone,
  ...rest
}) => {
  return (
    <AriaLink
      className={clsx(
        styles.link,
        standalone && styles.standalone,
        rest.className
      )}
      {...rest}
    >
      <>
        {children}
        {standalone && <ArrowRight size={20} />}
      </>
    </AriaLink>
  )
}

export { RouterProvider }
