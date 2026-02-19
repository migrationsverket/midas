'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Header.module.css'
import { clsx, LogoContext } from '@midas-ds/components'
import { useIsMobileDevice } from '../utils/useIsMobileDevice'

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Header = ({ className, ...rest }: HeaderProps) => {
  const isMobile = useIsMobileDevice()

  return (
    <LogoContext.Provider value={{ size: isMobile ? 'x-small' : 'large' }}>
      <header
        className={clsx(className, styles.header)}
        {...rest}
      />
    </LogoContext.Provider>
  )
}
