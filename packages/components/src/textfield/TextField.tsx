'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'

export interface TextFieldProps extends Omit<TextFieldBaseProps, 'children'> {
  className?: InputProps['className']
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => (
    <TextFieldBase {...props}>
      <Input
        className={className}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
