import {
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  type MenuItemProps,
  type MenuProps,
  type MenuTriggerProps
} from 'react-aria-components'
import { Button } from '@midas-ds/button'
import { EllipsisVertical } from 'lucide-react'
import styles from './Dropdown.module.css'

interface MidasMenuButtonProps<T>
  extends MenuProps<T>,
    Omit<MenuTriggerProps, 'children'> {
  label?: string
  title?: string
}

export function Dropdown<T extends object>({
  label,
  title,
  children,
  ...props
}: MidasMenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      <Button
        aria-label={label}
        variant='icon'
      >
        {title}
        <EllipsisVertical
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

export function DropdownItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined)

  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isOpen }) =>
        `${styles.dropdownMenu} ${isFocused ? 'focused' : ''} ${isOpen ? 'open' : ''}`
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