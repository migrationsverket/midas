import * as React from 'react'
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import { Text } from '../text'
import { Label } from '../label'
import { FieldError } from '../field-error'
import styles from './DateField.module.css'
import clsx from 'clsx'

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
      {description && <Text slot='description'>{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
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
