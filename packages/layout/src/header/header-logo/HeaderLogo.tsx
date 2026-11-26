'use client'

import { Logo } from '@midas-ds/components'
import styles from './HeaderLogo.module.css'

export interface HeaderLogoProps {
  /**
   * Shows the logo in its primary colour, set to false for the monochrome
   * version
   *
   * @default true
   */
  primary?: boolean
}

export const HeaderLogo = ({ primary }: HeaderLogoProps) => (
  <>
    <div className={styles.mobile}>
      <Logo
        size='x-small'
        primary={primary}
        padding={false}
        className={styles.mobileLogo}
      />
    </div>
    <div className={styles.desktop}>
      <Logo
        size='small'
        primary={primary}
        padding={false}
        className={styles.desktopLogo}
      />
    </div>
  </>
)
