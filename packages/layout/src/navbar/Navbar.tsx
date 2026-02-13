import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Navbar.module.css'
import { clsx } from '@midas-ds/components'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Navbar = ({ className, ...rest }: NavbarProps) => (
  <nav
    className={clsx(className, styles.navbar)}
    {...rest}
  />
)
