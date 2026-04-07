'use client'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { useIsMobileDevice } from '../utils'
import styles from './Navbar.module.css'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Navbar = ({ className, ...rest }: NavbarProps) => {
  const isMobileDevice = useIsMobileDevice()

  return isMobileDevice ? (
    <footer
      className={clsx(className, styles.navbar)}
      {...rest}
    />
  ) : null
}
