'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from 'clsx'

export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
  className?: InputProps['className']
  form?: string
  list?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, form, list, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <Input
        className={clsx(className)}
        form={form}
        list={list}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
