import styles from './TextArea.module.css'
import {
  TextArea as AriaTextArea,
  ValidationResult,
  TextAreaProps as AriaTextAreaProps,
  TextFieldProps as AriaTextFieldProps,
} from 'react-aria-components'
import { TextFieldWrapper } from '@migrationsverket/textfield'
import clsx from 'clsx'
import React, { CSSProperties, useState } from 'react'


export interface TextFieldProps extends AriaTextFieldProps {
  label?:string
  description?:string
  rows?: number
  maxCharacters?: number
  errorMessage?: string | ((validation: ValidationResult) => string)
}




export const TextArea: React.FC<TextFieldProps> = ({
  label,
  description,
  rows,
  maxCharacters,
  errorMessage,
  ...props
}) => {
  const [count, setCount] = useState('');

  return (
    <TextFieldWrapper label={label} description={description} errorMessage={errorMessage}  {...props}>

      <div>
       {maxCharacters == undefined ? (
        <span className={styles.styledCounting}>{count.length}</span>
      ) : (
        <span className={styles.styledCounting}>
          {count.length}/{maxCharacters}
        </span>
      )}
      </div>    
      
        <AriaTextArea className={clsx(styles.textArea)} rows={rows}
        value={count}
        onChange={(e) => {
          const countNumber = e.target.value;
          if (maxCharacters == null) {
            setCount(countNumber.substring(0));
          }
          setCount(countNumber.substring(0, maxCharacters));
        }}>
      </AriaTextArea>
           
    </TextFieldWrapper>
  )
}
