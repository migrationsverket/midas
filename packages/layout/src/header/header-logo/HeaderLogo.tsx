'use client'

import { useContext } from 'react'
import { Logo } from '@midas-ds/components'
import { LayoutBreakpointContext } from '../../layout/LayoutBreakpointContext'
import { useIsMobileDevice } from '../../utils'
import styles from './HeaderLogo.module.css'

export interface HeaderLogoProps {
  primary?: boolean
}

export const HeaderLogo = ({ primary }: HeaderLogoProps) => {
  const hasBreakpointOverride = useContext(LayoutBreakpointContext) !== undefined
  const isMobileDevice = useIsMobileDevice()
  // Only set when a consumer overrides the default breakpoint (see
  // LayoutBreakpointContext) — the built-in @media rules already handle the
  // default 640px split with no JS needed.
  const breakpointMode = hasBreakpointOverride
    ? isMobileDevice
      ? 'mobile'
      : 'desktop'
    : undefined

  return (
    <>
      <Logo
        size='x-small'
        primary={primary}
        padding={false}
        className={styles.mobile}
        data-breakpoint-mode={breakpointMode}
      />
      <Logo
        size='small'
        primary={primary}
        padding={false}
        className={styles.desktop}
        data-breakpoint-mode={breakpointMode}
      />
    </>
  )
}
