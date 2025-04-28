import * as React from 'react'
import { Dialog, Popover } from 'react-aria-components'
import styles from './DatePicker.module.css'

interface DatePickerPopoverProps {
  children?: React.ReactNode
}

export const DatePickerPopover = React.forwardRef<
  HTMLDivElement,
  DatePickerPopoverProps
>(({ children }, ref) => (
  <Popover
    UNSTABLE_portalContainer={
      (typeof ref !== 'function' && ref?.current) || undefined
    }
  >
    <Dialog className={styles.dialog}>{children}</Dialog>
  </Popover>
))
