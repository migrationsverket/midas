'use client'

import styles from './Link.module.css'
import {
  Link as AriaLink,
  LinkProps,
  RouterProvider
} from 'react-aria-components'
import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
interface MidasLink extends LinkProps {
  children: React.ReactNode
  standalone?: boolean
  icon?: LucideIcon
}

export const Link: React.FC<MidasLink> = ({
  children,
  standalone,
  icon: IconComponent,
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
        {IconComponent && (
          <IconComponent
            size={20}
            className={styles.icon}
          />
        )}
        {standalone && <ArrowRight size={20} />}
      </>
    </AriaLink>
  )
}

export { RouterProvider }
