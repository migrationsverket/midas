'use client'

import styles from './Link.module.css'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import clsx from 'clsx'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface MidasLinkProps<C extends React.ElementType> {
  children: React.ReactNode
  standalone?: boolean
  stretched?: boolean
  icon?: LucideIcon
  className?: string
  as?: C
}

export type LinkProps<C extends React.ElementType> = MidasLinkProps<C> &
  Omit<React.ComponentProps<C>, keyof MidasLinkProps<C>>

export const Link = <C extends React.ElementType = typeof AriaLink>({
  children,
  standalone,
  stretched,
  icon: IconComponent,
  className,
  as,
  ...rest
}: LinkProps<C>) => {
  const Component = as || AriaLink

  return (
    <Component
      className={clsx(
        styles.link,
        standalone && styles.standalone,
        stretched && styles.stretched,
        className,
      )}
      {...rest}
    >
      <>
        {children}
        {!standalone && IconComponent && (
          <IconComponent
            size={20}
            className={styles.icon}
          />
        )}
        {standalone && (
          <ArrowRight
            size={20}
            className={styles.icon}
          />
        )}
      </>
    </Component>
  )
}

export { RouterProvider }
