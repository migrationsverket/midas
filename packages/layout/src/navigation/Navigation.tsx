import { DetailedHTMLProps, HTMLAttributes } from 'react'
import {
  NavigationLink,
  NavigationSubMenu,
  NavigationLinkProps,
} from './components'
import styles from './Navigation.module.css'

export type NavigationProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Navigation = ({
  className,
  children,
  ...rest
}: NavigationProps) => (
  <nav
    className={`${className ?? ''} ${styles.navigation}`}
    {...rest}
  >
    <ul>{children}</ul>
  </nav>
)

Navigation.Link = NavigationLink
Navigation.SubMenu = NavigationSubMenu

export type { NavigationLinkProps }
