import { forwardRef } from 'react'
import { mergeProps, VisuallyHidden } from 'react-aria'
import { clsx } from 'clsx'
import { Minus, Check } from 'lucide-react'
import { CheckboxInnerProps } from './types'
import styles from './Checkbox.module.css'
import { variables } from '@midas-ds/theme'

export const CheckboxInner = forwardRef<HTMLLabelElement, CheckboxInnerProps>(
  (props, ref) => {
    const { hoverProps, isHovered } = props.hoverResult
    const { pressProps, isPressed } = props.pressResult
    const { isFocused, isFocusVisible, focusProps } = props.focusRingAria

    return (
      <label
        ref={ref}
        {...mergeProps(hoverProps, pressProps, props.labelProps)}
        slot={props.slot || undefined}
        className={clsx(styles.checkbox, props.className)}
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
          {props.isIndeterminate ? (
            <Minus
              size={14}
              color={variables.iconOnColor}
            />
          ) : (
            <Check
              size={14}
              color={variables.iconOnColor}
            />
          )}
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
  },
)
CheckboxInner.displayName = 'CheckboxInner'
