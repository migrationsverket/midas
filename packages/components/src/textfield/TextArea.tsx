'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextField.module.css'

export interface TextAreaProps
  extends Omit<TextFieldBaseProps, 'children' | 'type'>,
    Omit<
      AriaTextAreaProps,
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

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => (
    <TextFieldBase {...props}>
      <AriaTextArea
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
        value={undefined}
        className={clsx(styles.textArea, className)}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
