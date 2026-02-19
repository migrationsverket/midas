import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Navbar.module.css'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Navbar = ({ className, ...rest }: NavbarProps) => (
  <nav
    aria-label='bottom navbar'
    className={`${className ?? ''} ${styles.navbar}`}
    {...rest}
  />
)
