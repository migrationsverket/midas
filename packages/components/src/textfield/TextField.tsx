'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'

export interface TextFieldProps
  extends Omit<TextFieldBaseProps, 'children'>,
    Omit<
      InputProps,
      | 'autoComplete'
      | 'children'
      | 'defaultValue'
      | 'onBeforeInput'
      | 'onBlur'
      | 'onChange'
      | 'onCompositionEnd'
      | 'onCompositionStart'
      | 'onCompositionUpdate'
      | 'onCopy'
      | 'onCut'
      | 'onFocus'
      | 'onInput'
      | 'onKeyDown'
      | 'onKeyUp'
      | 'onPaste'
      | 'onSelect'
      | 'slot'
      | 'spellCheck'
      | 'style'
      | 'type'
      | 'value'
    > {}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => (
    <TextFieldBase {...props}>
      <Input
        {...props}
        autoComplete={undefined}
        defaultValue={undefined}
        onBeforeInput={undefined}
        onBlur={undefined}
        onChange={undefined}
        onCompositionEnd={undefined}
        onCompositionStart={undefined}
        onCompositionUpdate={undefined}
        onCopy={undefined}
        onCut={undefined}
        onFocus={undefined}
        onInput={undefined}
        onKeyDown={undefined}
        onKeyUp={undefined}
        onPaste={undefined}
        onSelect={undefined}
        slot={undefined}
        spellCheck={undefined}
        style={undefined}
        type={undefined}
        value={undefined}
        className={className}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
