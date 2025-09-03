'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from 'clsx'

export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
  className?: InputProps['className']
  form?: string
  list?: string
  ref?: React.Ref<HTMLInputElement>
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  form,
  list,
  ref,
  type,
  ...rest
}) => (
  <TextFieldBase {...rest}>
    <Input
      className={clsx(className)}
      form={form}
      list={list}
      ref={ref}
      type={type}
      skipContext
    />
  </TextFieldBase>
)
