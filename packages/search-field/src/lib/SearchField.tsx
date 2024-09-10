import {
  Button as AriaButton,
  FieldError,
  Input,
  Label,
  Text,
  SearchField as AriaSearchField,
  Form,
} from 'react-aria-components'
import { Search, X } from 'lucide-react'
import { TextFieldStyles } from '@midas-ds/textfield'
import { Button } from '@midas-ds/button'
import styles from './SearchField.module.css'
import clsx from 'clsx'
import React from 'react'

export interface SearchFieldProps {
  placeholder: string
  description?: string
}

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  description,
}) => {
  const [hasInput, setHasInput] = React.useState(false)

  return (
    <Form className={styles.container}>
      <AriaSearchField
        name="search"
        isRequired
        onInput={() => setHasInput(true)}
        onClear={() => setHasInput(false)}
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
            <AriaButton className={styles.clear}>
              <X size={16} />
            </AriaButton>
          )}
        </div>
        {description && <Text slot="description">{description}</Text>}
        <FieldError />
      </AriaSearchField>
      <Button type="submit">Sök</Button>
    </Form>
  )
}
