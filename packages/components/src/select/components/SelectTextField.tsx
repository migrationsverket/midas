import { SelectState } from 'react-stately'
import { MultiSelectState } from '../hooks/useMultiSelectState'
import { TextField } from 'react-aria-components'
import clsx from 'clsx'
import styles from '../Select.module.css'
import React from 'react'

interface SelectTextFieldProps<T> {
  errorMessage?: string
  className?: string
  children?: React.ReactNode
  tags?: React.ReactNode
  state: SelectState<T> | MultiSelectState<T>
}

export const SelectTextField = <T,>({
  state,
  children,
  className,
  tags,
  ...rest
}: SelectTextFieldProps<T>) => {
  return (
    <TextField
      {...rest}
      className={clsx(
        [styles.multiSelect],
        {
          [styles.multiSelectOpen]: state.isOpen,
        },
        className,
      )}
    >
      <div className={styles.multiSelect}>{children}</div>
      {tags}
    </TextField>
  )
}
