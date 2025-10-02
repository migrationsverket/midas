import clsx from '../utils/clsx'
import { Popover as AriaPopover, PopoverProps } from 'react-aria-components'
import styles from './Menu.module.css'

export type { PopoverProps as MenuPopoverProps }

export const MenuPopover = ({ className, ...rest }: PopoverProps) => (
  <AriaPopover
    className={clsx(className, styles.menuPopover)}
    offset={4}
    {...rest}
  />
)
