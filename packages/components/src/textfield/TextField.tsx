'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'

export const TextField = React.forwardRef<
  HTMLInputElement,
  TextFieldBaseProps & { className?: InputProps['className'] }
>(({ className, ...props }, ref) => (
  <TextFieldBase {...props}>
    <Input
      className={className}
      ref={ref}
    />
  </TextFieldBase>
))
