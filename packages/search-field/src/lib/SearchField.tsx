'use client'

import {
  FieldError,
  Input,
  Label,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps
} from 'react-aria-components'
import { Search, X } from 'lucide-react'
import { TextFieldStyles } from '@midas-ds/textfield'
import { Button } from '@midas-ds/button'
import styles from './SearchField.module.css'
import clsx from 'clsx'
import React from 'react'

export interface SearchFieldProps extends AriaSearchFieldProps {
  placeholder: string
  buttonText?: string
}

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  buttonText,
  ...props
}) => {
  const [hasInput, setHasInput] = React.useState(false)

  return (
    <AriaSearchField
      onInput={() => setHasInput(true)}
      onClear={() => setHasInput(false)}
      className={styles.container}
      {...props}
    >
      <Label hidden>{placeholder}</Label>
      <div className={styles.inputContainer}>
        <Search
          size={20}
          className={styles.icon}
        />
        <Input
          className={clsx(TextFieldStyles.input, styles.input)}
          placeholder={placeholder}
        />
        {hasInput && (
          <Button
            variant='icon'
            size='small'
            className={styles.clear}
          >
            <X
              size={20}
              aria-hidden
            />
          </Button>
        )}
      </div>
      <FieldError />
      <Button type='submit'>{buttonText ? buttonText : 'Sök'}</Button>
    </AriaSearchField>
  )
}
