import * as React from 'react'
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import { FieldError, Text } from 'react-aria-components'
import styles from './DateField.module.css'
import clsx from 'clsx'
import { Label } from '../label'

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={clsx(
        styles.dateField,
        props.isDisabled && styles.isDisabled,
        className,
      )}
    >
      <Label variant='label-02'>{label}</Label>
      {description && (
        <Text
          slot='description'
          className={styles.description}
        >
          {description}
        </Text>
      )}
      <FieldError className={styles.fieldError}>{errorMessage}</FieldError>
      <DateInput className={styles.inputField}>
        {segment => (
          <DateSegment
            segment={segment}
            className={styles.segment}
          />
        )}
      </DateInput>
    </AriaDateField>
  )
}
