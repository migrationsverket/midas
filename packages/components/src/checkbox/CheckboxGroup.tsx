import * as React from 'react'
import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria'
import { useCheckboxGroupState } from 'react-stately'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { useLocalizedStringFormatter } from '../utils/intl'
import { useSelectAll } from './useSelectAll'
import { Checkbox } from './Checkbox'
import { CheckboxGroupContext } from './context'
import { CheckboxGroupFieldError } from './CheckboxGroupFieldError'
import messages from './intl/translations.json'
import styles from './Checkbox.module.css'
import { LabelWrapper } from '../label/LabelWrapper'

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  children: React.ReactNode
  showSelectAll?: boolean
  selectAllLabel?: string
  errorPosition?: 'top' | 'bottom'
  popover?: InfoPopoverProps
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const state = useCheckboxGroupState(props)

  const stringFormatter = useLocalizedStringFormatter(messages)

  const { groupProps, labelProps, descriptionProps } = useCheckboxGroup(
    props,
    state,
  )

  const { allSelected, someSelected, checkboxValues } = useSelectAll(
    props.children,
    state,
  )

  const handleChange = (checked: boolean) => {
    state.setValue(checked ? checkboxValues : [])
  }

  return (
    <div
      {...groupProps}
      className={styles.checkboxGroup}
      data-readonly={props.isReadOnly || undefined}
      data-disabled={props.isDisabled || undefined}
    >
      <LabelWrapper popover={props.popover}>
        {props.label && <Label {...labelProps}>{props.label}</Label>}
      </LabelWrapper>

      {props.description && (
        <Text
          slot='description'
          {...descriptionProps}
        >
          {props.description}
        </Text>
      )}
      {props.errorPosition === 'top' && (
        <CheckboxGroupFieldError
          {...props}
          state={state}
        />
      )}
      <div className={styles.checkboxList}>
        {props.showSelectAll && (
          <Checkbox
            isSelected={allSelected}
            isIndeterminate={someSelected}
            isReadOnly={props.isReadOnly}
            onChange={handleChange}
          >
            {props.selectAllLabel || stringFormatter.format('selectAll')}
          </Checkbox>
        )}
        <CheckboxGroupContext.Provider value={state}>
          {props.children}
        </CheckboxGroupContext.Provider>
      </div>
      {props.errorPosition === 'bottom' && (
        <CheckboxGroupFieldError
          {...props}
          state={state}
        />
      )}
    </div>
  )
}
