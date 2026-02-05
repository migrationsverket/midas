import { ReactNode } from 'react'
import styles from './Navbar.module.css'

export interface Navbar {
  children?: ReactNode
}

export const Navbar = ({ children }: Navbar) => (
  <nav className={styles.navbar}>{children}</nav>
)
