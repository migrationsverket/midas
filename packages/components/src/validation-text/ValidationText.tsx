import * as React from 'react'
import {
  FieldErrorContext,
  FieldError as AriaFieldError,
  type FieldErrorProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './ValidationText.module.css'
import { Message } from './Message'

export interface ValidationTextProps extends FieldErrorProps {
  isInvalid?: boolean
  validationSuccessful?: boolean
  message?: string
}

export const ValidationText: React.FC<ValidationTextProps> = ({
  className,
  isInvalid,
  message,
  validationSuccessful,
  ...rest
}) => {
  const context = React.useContext(FieldErrorContext)

  const stringFormatter = useLocalizedStringFormatter(messages)

  if (!context && isInvalid && message && typeof rest.children !== 'function') {
    return (
      <Message className={clsx(styles.error, className)}>{message}</Message>
    )
  }

  if (!context?.isInvalid) {
    return validationSuccessful ? (
      <Message className={clsx(styles.success, className)}>
        {message || stringFormatter.format('validationSuccessful')}
      </Message>
    ) : null
  }

  return (
    <AriaFieldError
      {...rest}
      className={clsx(styles.validationText, styles.error, className)}
    />
  )
}
