import { Button, clsx, MidasButton } from '@midas-ds/components'
import { Menu } from 'lucide-react'
import styles from './Hamburger.module.css'

export interface HamburgerProps extends MidasButton {
  /**
   * An id of a Navigation component
   */
  'aria-controls': string
  /**
   * Wheter the Navigation that this Hamburger controls is open
   */
  isOpen: boolean
}

export const Hamburger = ({ className, isOpen, ...rest }: HamburgerProps) => (
  <Button
    aria-expanded={isOpen}
    aria-haspopup='dialog'
    className={clsx(className, styles.hamburger)}
    icon={Menu}
    variant='icon'
    {...rest}
  />
)
