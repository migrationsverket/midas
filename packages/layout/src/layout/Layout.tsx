'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { LayoutProvider } from './LayoutProvider'
import styles from './Layout.module.css'

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Layout = ({ className, ...rest }: LayoutProps) => (
  <LayoutProvider>
    <div
      className={`${className ?? ''} ${styles.layout}`}
      {...rest}
    />
  </LayoutProvider>
)
