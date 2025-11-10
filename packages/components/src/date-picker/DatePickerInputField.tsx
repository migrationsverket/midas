import * as React from 'react'
import { Button, Group } from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker'

interface DatePickerInputFieldProps
  extends Pick<
    DatePickerProps,
    'isDisabled' | 'isInvalid' | 'isReadOnly' | 'size'
  > {
  children?: React.ReactNode
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  size = 'large',
}) => (
  <Group
    className={clsx(styles.inputField, {
      [styles.medium]: size === 'medium',
      [styles.readOnly]: isReadOnly,
    })}
  >
    {children}
    <Button
      className={clsx(styles.calendarButton, {
        [styles.medium]: size === 'medium',
        [styles.readOnly]: isReadOnly,
      })}
      data-invalid={isInvalid || undefined}
      isDisabled={isDisabled}
    >
      <CalendarDays
        aria-hidden
        size={20}
      />
    </Button>
  </Group>
)
