import { ReactNode } from 'react'
import styles from './Layout.module.css'

export interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>{children}</div>
)
