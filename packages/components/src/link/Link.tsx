'use client'

import styles from './Link.module.css'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import clsx from 'clsx'
import {
  ArrowDownToLine,
  ArrowRight,
  LucideProps,
  SquareArrowOutUpRight,
  type LucideIcon,
} from 'lucide-react'

export interface LinkComponentProps<C extends React.ElementType> {
  children: React.ReactNode
  /** Use standalone to use the component as a standalone link, for example under a block of text.*/
  standalone?: boolean
  /** Use stretched to make the entire parent element clickable to the link. The parent must have position: relative; so that the clickable area of the link does not extend too far.*/
  stretched?: boolean
  /** Optional icon, placed to the left of the link */
  icon?: LucideIcon
  className?: string
  /** Replace base component with any Client Side Routing link instead.
   * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}
   */
  as?: C
}

export type LinkProps<C extends React.ElementType> = LinkComponentProps<C> &
  Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>

export const Link = <C extends React.ElementType = typeof AriaLink>({
  children,
  standalone,
  target,
  stretched,
  download,
  icon: IconComponent,
  className,
  as,
  ...rest
}: LinkProps<C>) => {
  const Component = as || AriaLink

  const Icon = ({ ...rest }: LucideProps) => {
    if (IconComponent) return <IconComponent {...rest} />

    if (download) return <ArrowDownToLine {...rest} />

    if (target === '_blank') return <SquareArrowOutUpRight {...rest} />

    if (standalone) return <ArrowRight {...rest} />

    return null
  }

  return (
    <Component
      className={clsx(
        styles.link,
        standalone && styles.standalone,
        stretched && styles.stretched,
        className,
      )}
      {...rest}
      target={target}
    >
      <>
        {children}
        <Icon
          size={16}
          className={styles.icon}
        />
      </>
    </Component>
  )
}

export { RouterProvider }
