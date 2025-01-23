'use client'

import {
  FieldError,
  Input,
  Label,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps
} from 'react-aria-components'
import { Search, X } from 'lucide-react'
import { TextFieldStyles } from '../../textfield'
import { Button } from '../../button'
import styles from 'packages/components/src/search-field/src/SearchField.module.css'
import clsx from 'clsx'
import * as React from 'react'

export interface SearchFieldProps extends AriaSearchFieldProps {
  /** Placeholder text */
  placeholder: string
  /**
   *  Text displayed on the 'search' button
   *  @default
   *  'Sök'
   */
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
          // @ts-ignore
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
