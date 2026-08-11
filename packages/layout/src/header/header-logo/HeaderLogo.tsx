'use client'

import { Logo } from '@midas-ds/components'
import styles from './HeaderLogo.module.css'

export interface HeaderLogoProps {
  primary?: boolean
}

export const HeaderLogo = ({ primary }: HeaderLogoProps) => (
  <>
    <Logo size='x-small' primary={primary} padding={false} className={styles.mobile} />
    <Logo size='small' primary={primary} padding={false} className={styles.desktop} />
  </>
)
