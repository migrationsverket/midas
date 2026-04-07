import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Navbar.module.css'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Navbar = ({ className, ...rest }: NavbarProps) => (
  <footer
    className={clsx(className, styles.navbar)}
    {...rest}
  />
)
