import React from 'react'
import clsx from 'clsx'
import styles from '../Select.module.css'

interface SelectDescriptionProps {
  description?: string
  errorMessage?: string
  isDisabled?: boolean
}

export const SelectDescription: React.FC<SelectDescriptionProps> = ({
  description,
  errorMessage,
  isDisabled,
}) => {
  if (description) {
    return (
      <span
        className={clsx(styles.description, {
          [styles.descriptionDisabled]: isDisabled,
          [styles.descriptionInvalid]: !!errorMessage,
        })}
        slot={'description'}
      >
        {description}
      </span>
    )
  }
  return null
}
