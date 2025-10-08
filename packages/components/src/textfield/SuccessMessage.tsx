import React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './TextField.module.css'

export type SuccessMessageProps = {
  /**
   * Whether to display the message, will show if the field is not in an invalid state
   */
  isVisible: boolean
  /**
   * The success message
   */
  message: string
}

export const SuccessMessage: React.FC<
  SuccessMessageProps & { className?: string }
> = ({ className, isVisible, message }) => {
  const fieldErrorContext = React.useContext(FieldErrorContext)

  if (fieldErrorContext?.isInvalid || !isVisible) {
    return null
  }

  return (
    <span
      className={clsx(styles.successMessage, className)}
      slot='errorMessage'
    >
      {message}
    </span>
  )
}
