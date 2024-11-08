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
  stretched?: boolean
  icon?: LucideIcon
}

export const Link: React.FC<MidasLink> = ({
  children,
  standalone,
  stretched,
  icon: IconComponent,
  ...rest
}) => {
  return (
    <AriaLink
      className={clsx(
        styles.link,
        standalone && styles.standalone,
        stretched && styles.stretched,
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
        {standalone && <ArrowRight size={20} className={styles.icon} />}
      </>
    </AriaLink>
  )
}

export { RouterProvider }
