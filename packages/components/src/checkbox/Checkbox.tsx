import * as React from 'react'
import {
  type AriaCheckboxProps,
  mergeProps,
  useCheckbox,
  useCheckboxGroupItem,
  useFocusRing,
  useHover,
  usePress,
  VisuallyHidden,
} from 'react-aria'
import {
  CheckboxContext,
  FormContext,
  type SlotProps,
  useContextProps,
  useSlottedContext,
} from 'react-aria-components'
import { useToggleState } from '@react-stately/toggle'
import { clsx } from 'clsx'
import { CheckboxGroupContext } from './context'
import styles from './Checkbox.module.css'

export type CheckboxProps = AriaCheckboxProps & SlotProps

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, CheckboxContext)

    const originalProps = props

    const formProps = useSlottedContext(FormContext)

    const validationBehavior =
      props.validationBehavior ?? formProps?.validationBehavior ?? 'native'

    const groupState = React.useContext(CheckboxGroupContext)

    const inputRef = React.useRef<HTMLInputElement>(null)

    const { hoverProps, isHovered } = useHover(props)

    const {
      isIndeterminate = false,
      // eslint-disable-next-line
      isSelected: _isSelected,
      ...rest
    } = props

    const { pressProps } = usePress(rest)

    const { isFocused, isFocusVisible, focusProps } = useFocusRing()

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
            // @ts-expect-error Value is optional for standalone checkboxes, but required for CheckboxGroup items;
            // it's passed explicitly here to avoid typescript error (requires ignore).
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
        {props.children}
      </label>
    )
  },
)
