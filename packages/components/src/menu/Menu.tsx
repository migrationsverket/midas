import clsx from 'clsx'
import { Menu as AriaMenu, MenuProps } from 'react-aria-components'
import styles from './Menu.module.css'

export type { MenuProps }

export const Menu = <T extends object>({
  className,
  ...rest
}: MenuProps<T>) => (
  <AriaMenu
    className={clsx(className, styles.menu)}
    {...rest}
  />
)
