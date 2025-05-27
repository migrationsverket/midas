import * as React from 'react'
import clsx from 'clsx'
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
      {...rest}
    >
      {children}
    </Popover>
  )
}
