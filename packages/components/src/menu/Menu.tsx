import {
  Menu as AriaMenu,
  MenuTrigger,
  type MenuTriggerProps,
  type MenuProps as AriaMenuProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import type { Size } from '../common/types'
import styles from './Menu.module.css'
import { ExcludeKeysFrom } from '../utils/types'

export { MenuTrigger, type MenuTriggerProps }

/**
 * @deprecated Links are not enforced in menus.
 */
export type MenuItemObject = ExcludeKeysFrom<
  { [prop: string]: unknown },
  'href'
>

export interface MenuProps<T> extends AriaMenuProps<T> {
  /** Component size (large: height 40px, medium: height 32px)
   *  @default 'large'
   **/
  size?: Size
}

export const Menu = <T extends object>({
  className,
  size = 'large',
  ...rest
}: MenuProps<T>) => (
  <AriaMenu
    className={clsx(className, styles.menu, size === 'medium' && styles.medium)}
    {...rest}
  />
)
