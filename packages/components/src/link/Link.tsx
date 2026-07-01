'use client'

import styles from './Link.module.css'
import { Link as AriaLink, RouterProvider } from 'react-aria-components'
import { VisuallyHidden } from 'react-aria'
import clsx from '../utils/clsx'
import {
  ArrowDownToLine,
  ArrowRight,
  LucideProps,
  SquareArrowOutUpRight,
  type LucideIcon,
} from 'lucide-react'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

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
  icon: customIcon,
  className,
  as,
  ...rest
}: LinkProps<C>) => {
  const Component = as || AriaLink

  const strings = useLocalizedStringFormatter(messages)

  const getIcon = (): { icon: LucideIcon; label?: string } | null => {
    if (customIcon) return { icon: customIcon }
    if (download) return { icon: ArrowDownToLine, label: strings.format('downloadsFile') }
    if (target === '_blank') return { icon: SquareArrowOutUpRight, label: strings.format('opensInNewTab') }
    if (standalone) return { icon: ArrowRight }
    return null
  }

  const iconConfig = getIcon()

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
      download={download}
    >
      {children}
      {iconConfig ? (
        <>
          <Icon
            className={styles.icon}
            icon={iconConfig.icon}
            size={16}
            aria-hidden={true}
          />
          {iconConfig.label && <VisuallyHidden>{iconConfig.label}</VisuallyHidden>}
        </>
      ) : null}
    </Component>
  )
}

const Icon = ({
  icon: IconComponent,
  ...rest
}: { icon: LucideIcon } & LucideProps) => <IconComponent {...rest} />

export { RouterProvider }
