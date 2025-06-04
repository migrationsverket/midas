import {
  AriaCheckboxProps,
  useCheckboxGroupItem,
  useCheckbox,
} from 'react-aria'
import React, { ForwardedRef, forwardRef, useContext } from 'react'
import { CheckboxGroupContext } from './context.ts'
import { useToggleState } from '@react-stately/toggle'
import {
  useFocusRing,
  useHover,
  mergeProps,
  usePress,
  VisuallyHidden,
} from 'react-aria'
import styles from './Checkbox.module.css'
import { clsx } from 'clsx'
import {
  CheckboxContext,
  FormContext,
  SlotProps, useContextProps,
  useSlottedContext
} from 'react-aria-components'

export const Checkbox = /*#__PURE__*/ (forwardRef as typeof forwardRef)(
  function Checkbox(
    props: AriaCheckboxProps & SlotProps,
    ref: ForwardedRef<HTMLLabelElement>,
  ) {
    [props, ref] = useContextProps(props, ref, CheckboxContext);
    const originalProps = props
    const { validationBehavior: formValidationBehavior } =
      useSlottedContext(FormContext) || {}
    const validationBehavior =
      props.validationBehavior ?? formValidationBehavior ?? 'native'
    const groupState = useContext(CheckboxGroupContext)
    const { children } = props

    const inputRef = React.useRef<HTMLInputElement>(null)

    const { hoverProps, isHovered } = useHover({ ...props })
    const { pressProps } = usePress({ ...props })

    const { isFocused, isFocusVisible, focusProps } = useFocusRing()

    const { isIndeterminate = false } = props

    const {
      inputProps,
      isDisabled,
      isInvalid,
      isSelected,
      labelProps,
      isPressed,
      isReadOnly,
    } = groupState
      ? useCheckboxGroupItem(
          {
            ...props,
            // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
            // it's passed explicitly here to avoid typescript error (requires ignore).
            // @ts-ignore
            value: props.value,
            children:
              typeof props.children === 'function' ? true : props.children,
            // Only pass isRequired to react-aria if they came from
            // the props for this individual checkbox, and not from the group via context.
            isRequired: originalProps.isRequired,
            isInvalid: originalProps.isInvalid,
            validationBehavior,
          },
          groupState,
          inputRef,
        )
      : useCheckbox(
          { validationBehavior, ...props },
          useToggleState(props),
          inputRef,
        )

    return (
      <>
        <label
          ref={ref}
          {...mergeProps(hoverProps, pressProps, labelProps)}
          slot={props.slot || undefined}
          className={styles.checkbox}
          data-hovered={isHovered || undefined}
          data-selected={isSelected || undefined}
          data-indeterminate={props.isIndeterminate || undefined}
          data-pressed={isPressed || undefined}
          data-disabled={isDisabled || undefined}
          data-readonly={isReadOnly || undefined}
          data-invalid={isInvalid || undefined}
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
              {isIndeterminate ? (
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
              {...mergeProps(inputProps, focusProps)}
              ref={inputRef}
            />
          </VisuallyHidden>
          {children}
        </label>
      </>
    )
  },
)
