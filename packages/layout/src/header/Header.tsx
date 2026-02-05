import { ReactNode } from 'react'
import styles from './Header.module.css'

export interface HeaderProps {
  children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => (
  <header className={styles.header}>{children}</header>
)
