import React from 'react'
import { FieldErrorContext } from 'react-aria-components'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './TextField.module.css'

type SuccessMessageProps = {
  children: React.ReactNode
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ children }) => {
  const fieldErrorContext = React.useContext(FieldErrorContext)

  const stringFormatter = useLocalizedStringFormatter(messages)

  if (fieldErrorContext?.isInvalid) {
    return null
  }

  return (
    <span
      className={clsx(styles.successMessage)}
      slot='errorMessage'
    >
      {children || stringFormatter.format('validationSuccessful')}
    </span>
  )
}
