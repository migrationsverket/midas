import { FocusableElement, RefObject } from '@react-types/shared'
import React, { ReactNode, useRef } from 'react'
import { useFormReset } from '@react-aria/utils'
import { useFormValidation } from '@react-aria/form'
import { useVisuallyHidden } from '@react-aria/visually-hidden'
import { MultiSelectState } from './useMultiSelectState'

export interface AriaHiddenMultiSelectProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string

  /** The text label for the select. */
  label?: ReactNode

  /** HTML form input name. */
  name?: string

  /** Sets the disabled state of the select and input. */
  isDisabled?: boolean

  /** Sets the required state of the select and input. */
  isRequired?: boolean
}

export interface HiddenMultiSelectProps<T> extends AriaHiddenMultiSelectProps {
  /** State for the select. */
  state: MultiSelectState<T>

  /** A ref to the trigger element. */
  triggerRef: RefObject<FocusableElement | null>
}

interface AriaHiddenMultiSelectOptions extends AriaHiddenMultiSelectProps {
  /** A ref to the hidden `<select>` element. */
  selectRef?: RefObject<HTMLSelectElement | null>
}

interface HiddenMultiSelectAria {
  /** Props for the container element. */
  containerProps: React.HTMLAttributes<FocusableElement>

  /** Props for the hidden input element. */
  inputProps: React.InputHTMLAttributes<HTMLInputElement>

  /** Props for the hidden select element. */
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>
}

/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */
export function useHiddenMultiSelect<T>(
  {
    autoComplete,
    name,
    isDisabled,
    isRequired,
    selectRef,
  }: AriaHiddenMultiSelectOptions,
  state: MultiSelectState<T>,
  triggerRef: RefObject<FocusableElement | null>,
): HiddenMultiSelectAria {
  const { visuallyHiddenProps } = useVisuallyHidden()

  useFormReset(selectRef, state.selectedKeys, state.setSelectedKeys)
  useFormValidation(
    {
      validationBehavior: 'native',
      focus: () => triggerRef.current?.focus(),
    },
    state,
    selectRef,
  )

  // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
  // In Firefox, there must be a <label> to identify the <select> whereas other browsers
  // seem to identify it just by surrounding text.
  // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
  // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
  // non tabbable with tabIndex={-1}.
  return {
    containerProps: {
      ...visuallyHiddenProps,
      'aria-hidden': true,
      // @ts-expect-error - data-a11y-ignore is not a standard attribute
      'data-react-aria-prevent-focus': true,
      'data-a11y-ignore': 'aria-hidden-focus',
    },
    inputProps: {
      style: { display: 'none' },
    },
    selectProps: {
      tabIndex: -1,
      autoComplete,
      disabled: isDisabled,
      required: isRequired,
      name,
      value: Array.from(state.selectedKeys).map(key => key.toString()),
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        state.setSelectedKeys(e.target.value),
      multiple: true,
    },
  }
}

/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */
export function HiddenMultiSelect<T>(props: HiddenMultiSelectProps<T>) {
  const { state, triggerRef, name, isDisabled } = props
  const label = `${props.label}-hidden`
  const selectRef = useRef(null)
  const { containerProps, selectProps } = useHiddenMultiSelect(
    { ...props, selectRef },
    state,
    triggerRef,
  )

  // If used in a <form>, use a hidden input so the value can be submitted to a server.
  // If the collection isn't too big, use a hidden <select> element for this so that browser
  // autofill will work. Otherwise, use an <input type="hidden">.
  if (state.collection.size <= 300) {
    return (
      <div
        {...containerProps}
        data-testid='hidden-select-container'
      >
        <label>
          {label}
          <select
            {...selectProps}
            ref={selectRef}
          >
            <option />
            {[...state.collection.getKeys()].map(key => {
              const item = state.collection.getItem(key)
              if (item && item.type === 'item') {
                return (
                  <option
                    key={item.key}
                    value={item.key}
                  >
                    {item.textValue}
                  </option>
                )
              }
              return null
            })}
          </select>
        </label>
      </div>
    )
  } else if (name) {
    return (
      <input
        type='hidden'
        autoComplete={selectProps.autoComplete}
        name={name}
        disabled={isDisabled}
        value={
          Array.from(state.selectedKeys).map(key => key.toString()) ?? ['']
        }
      />
    )
  }

  return null
}
