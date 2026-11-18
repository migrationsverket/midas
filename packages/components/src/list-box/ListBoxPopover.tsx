import * as React from 'react'
import clsx from '../utils/clsx'
import { Popover, type PopoverProps } from 'react-aria-components'
import styles from './ListBox.module.css'

export const ListBoxPopover: React.FC<PopoverProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Popover
      className={clsx(className, styles.listBoxPopover)}
      offset={0}
      // The popover is as wide as its trigger, so React Aria's default 12px
      // padding from the viewport edge can only push it out of line with the
      // trigger, and past the other edge when the trigger fills the viewport.
      // That overflow scrolls the page sideways, which closes the popover
      containerPadding={0}
      {...rest}
    >
      {children}
    </Popover>
  )
}
