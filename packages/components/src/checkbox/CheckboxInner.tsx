import * as React from 'react'
import { mergeProps, VisuallyHidden } from 'react-aria'
import { clsx } from 'clsx'
import { CheckboxInnerProps } from './types'
import styles from './Checkbox.module.css'

export const CheckboxInner = React.forwardRef<
  HTMLLabelElement,
  CheckboxInnerProps
>((props, ref) => {
  const { hoverProps, isHovered } = props.hoverResult
  const { pressProps, isPressed } = props.pressResult
  const { isFocused, isFocusVisible, focusProps } = props.focusRingAria

  return (
    <label
      ref={ref}
      {...mergeProps(hoverProps, pressProps, props.labelProps)}
      slot={props.slot || undefined}
      className={styles.checkbox}
      data-hovered={isHovered || undefined}
      data-selected={props.isSelected || undefined}
      data-indeterminate={props.isIndeterminate || undefined}
      data-pressed={isPressed || undefined}
      data-disabled={props.isDisabled || undefined}
      data-readonly={props.isReadOnly || undefined}
      data-invalid={props.isInvalid || undefined}
      data-focused={isFocused || undefined}
      data-focus-visible={isFocusVisible || undefined}
      data-required={props.isRequired || undefined}
    >
      <div className={clsx(styles.checkboxInner)}>
        <svg
          width={16}
          height={16}
          viewBox='0 0 18 18'
          aria-hidden='true'
        >
          {props.isIndeterminate ? (
            <rect
              x={4}
              y={8}
              width={10}
              height={2}
            />
          ) : (
            <polyline points='3,9 7,13 15,4' />
          )}
        </svg>
      </div>
      <VisuallyHidden>
        <input
          {...mergeProps(props.inputProps, focusProps)}
          ref={props.inputRef}
        />
      </VisuallyHidden>
      {props.children}
    </label>
  )
})
