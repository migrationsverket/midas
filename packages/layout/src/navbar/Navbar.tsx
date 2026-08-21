'use client'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { NavbarContext } from './NavbarContext'
import styles from './Navbar.module.css'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Navbar = ({ className, children, ...rest }: NavbarProps) => (
  <footer
    className={clsx(className, styles.navbar)}
    {...rest}
  >
    <NavbarContext.Provider value={{}}>{children}</NavbarContext.Provider>
  </footer>
)
