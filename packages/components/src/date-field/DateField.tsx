import * as React from 'react'
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import { Text } from '../text'
import { Label } from '../label'
import { FieldError } from '../field-error'
import styles from './DateField.module.css'
import clsx from 'clsx'
import { DateInput } from '../date-input'
import { DateSegment } from '../date-segment'

interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const DateField: React.FC<DateFieldProps> = ({
  label,
  description,
  errorMessage,
  className,
  errorPosition = 'top',
  isDisabled,
  ...rest
}) => (
  <AriaDateField
    {...rest}
    className={clsx(styles.dateField, className)}
  >
    <Label variant='label-02'>{label}</Label>
    {description && <Text slot='description'>{description}</Text>}
    {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
    <div
      className={styles.inputField}
      data-disabled={isDisabled || undefined}
    >
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
    </div>
    {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
  </AriaDateField>
)
