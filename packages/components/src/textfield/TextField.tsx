'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from 'clsx'

export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
  inputProps?: InputProps
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ inputProps, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <Input
        {...inputProps}
        className={clsx(inputProps?.className)}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
