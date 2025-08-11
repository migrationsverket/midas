import * as React from 'react'
import { Dialog, Popover } from 'react-aria-components'
import styles from './DatePicker.module.css'

interface DatePickerPopoverProps {
  children?: React.ReactNode
}

export const DatePickerPopover: React.FC<DatePickerPopoverProps> = ({
  children,
}) => (
  <Popover>
    <Dialog className={styles.dialog}>{children}</Dialog>
  </Popover>
)
