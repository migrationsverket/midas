import * as React from 'react'
import { Button, Group } from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import { Size } from '../common/types'
import { useTheme } from '../theme'

interface DatePickerInputFieldProps {
  children?: React.ReactNode
  isDisabled?: boolean
  isInvalid?: boolean
  size?: Size
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  children,
  isDisabled,
  isInvalid,
  ...rest
}) => {
  const { size } = useTheme(rest)

  return (
    <Group
      className={clsx(styles.inputField, {
        [styles.medium]: size === 'medium',
      })}
    >
      {children}
      <Button
        className={clsx(styles.calendarButton, {
          [styles.medium]: size === 'medium',
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
}
