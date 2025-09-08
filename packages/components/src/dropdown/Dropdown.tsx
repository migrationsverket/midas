import {
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  type MenuItemProps,
  type MenuProps,
  type MenuTriggerProps,
} from 'react-aria-components'
import { Button } from '../button'
import { EllipsisVertical, LucideIcon } from 'lucide-react'
import styles from './Dropdown.module.css'
import clsx from 'clsx'

/**
 *
 * @deprecated since v12.1.0
 * Please use `MenuProps` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export interface MidasMenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: string
  title?: string
  /**
   * The icon to use for the menu button
   * @default EllipsisVertical
   */
  icon?: LucideIcon
}

/**
 *
 * @deprecated since v12.1.0
 * Please use `Menu` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export function Dropdown<T extends object>({
  label,
  title,
  children,
  icon: Icon = EllipsisVertical,
  ...props
}: MidasMenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button
        aria-label={label || props['aria-label']}
        variant='icon'
      >
        {title}
        <Icon
          size={20}
          aria-hidden
        />
      </Button>
      <Popover>
        <Menu
          {...props}
          className={styles.dropDownMenu}
        >
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}

/**
 *
 * @deprecated since v12.1.0
 * Please use `Menu` and `MenuItem` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export function DropdownItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)

  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isOpen }) =>
        clsx(
          styles.menuItem,
          props.className,
          isFocused && 'focused',
          isOpen && 'open',
        )
      }
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg
              className='chevron'
              viewBox='0 0 24 24'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          )}
        </>
      )}
    </MenuItem>
  )
}
