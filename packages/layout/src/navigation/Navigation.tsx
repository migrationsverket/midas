import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './Navigation.module.css'

export interface NavigationProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  children?: ReactNode
}

export const Navigation = ({
  children,
  className,
  ...rest
}: NavigationProps) => (
  <nav
    className={clsx(className, styles.navigation)}
    {...rest}
  >
    {children}
  </nav>
)
