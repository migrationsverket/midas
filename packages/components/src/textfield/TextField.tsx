'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from '../utils/clsx'

export type TextFieldProps = TextFieldBaseProps & Omit<InputProps, 'size'>

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, list, type, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <Input
        className={clsx(className)}
        list={list}
        ref={ref}
        type={type}
        skipContext
      />
    </TextFieldBase>
  ),
)
