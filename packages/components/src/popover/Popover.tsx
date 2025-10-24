import clsx from '../utils/clsx'
import styles from './Popover.module.css'
import * as React from 'react'
import {
  PopoverProps,
  Popover as AriaPopover,
  OverlayArrow,
} from 'react-aria-components'

export interface MidasPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode
  hideArrow?: boolean
}

export function Popover({
  children,
  className,
  offset = 4,
  hideArrow = false,
  ...props
}: MidasPopoverProps) {
  return (
    <AriaPopover
      {...props}
      offset={offset}
      className={clsx(styles.popover, className)}
    >
      {!hideArrow && (
        <OverlayArrow className={styles.arrow}>
          <svg
            width={8}
            height={8}
            viewBox='0 0 8 8'
          >
            <path d='M0 0 L4 4 L8 0' />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaPopover>
  )
}
