'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from 'clsx'

export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
  className?: InputProps['className']
  dir?: string
  dirName?: string
  form?: string
  list?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, dir, dirName, form, list, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <Input
        className={clsx(className)}
        dir={dir}
        // @ts-expect-error @types/react doesn't recognize this valid attribute
        dirName={dirName}
        form={form}
        list={list}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
