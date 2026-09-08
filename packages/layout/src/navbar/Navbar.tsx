'use client'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import { NavbarContext } from './NavbarContext'
import { LayoutBreakpointContext } from '../layout/LayoutBreakpointContext'
import { useIsMobileDevice } from '../utils'
import styles from './Navbar.module.css'

export type NavbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Navbar = ({ className, children, ...rest }: NavbarProps) => {
  const hasBreakpointOverride = useContext(LayoutBreakpointContext) !== undefined
  const isMobileDevice = useIsMobileDevice()

  return (
    <footer
      className={clsx(className, styles.navbar)}
      // Only set when a consumer overrides the default breakpoint (see
      // LayoutBreakpointContext) — the built-in @media rule already handles
      // the default 640px split with no JS needed.
      data-breakpoint-mode={
        hasBreakpointOverride
          ? isMobileDevice
            ? 'mobile'
            : 'desktop'
          : undefined
      }
      {...rest}
    >
      <NavbarContext.Provider value={{}}>{children}</NavbarContext.Provider>
    </footer>
  )
}
