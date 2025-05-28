import * as React from 'react'
import styles from './Select.module.css'
import type { MultiSelectState } from './useMultiSelectState'
import { type AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import { Check } from 'lucide-react'
import { Collection, ListBoxItemProps } from 'react-aria-components'
import { Checkbox } from '../checkbox'
import { ListBox, ListBoxItem, ListBoxSection } from '../list-box'

interface ListBoxProps<T extends object> extends AriaListBoxOptions<T> {
  state: MultiSelectState<T>
}

interface SectionProps<T extends object> {
  section: Node<T>
  state: MultiSelectState<T>
}

const Option = <T extends object>({
  children,
  ...rest
}: ListBoxItemProps<T>) => (
  <ListBoxItem {...rest}>
    {({ isDisabled, isSelected, selectionMode }) => (
      <>
        {selectionMode === 'multiple' ? (
          <div className={styles.checkboxContainer}>
            <Checkbox
              isDisabled={isDisabled}
              isSelected={isSelected}
              isReadOnly
              excludeFromTabOrder
            />
          </div>
        ) : null}
        {children}
        {isSelected && selectionMode === 'single' ? (
          <Check
            size={20}
            className={styles.listBoxItemCheckmark}
          />
        ) : null}
      </>
    )}
  </ListBoxItem>
)

const Section = <T extends object>({ section, state }: SectionProps<T>) => (
  <ListBoxSection
    {...section}
    value={section.value || undefined}
    name={section.rendered}
  >
    {state.collection.getChildren ? (
      <Collection items={state.collection?.getChildren(section.key)}>
        {item => (
          <Option
            {...item}
            key={item.key}
            value={item.value || undefined}
          >
            {item.rendered}
          </Option>
        )}
      </Collection>
    ) : null}
  </ListBoxSection>
)

export const SelectListBox = <T extends object>({
  state,
  ...rest
}: ListBoxProps<T>) => (
  <ListBox
    {...rest}
    {...state}
    escapeKeyBehavior='none'
    onSelectionChange={state.setSelectedKeys}
    items={state.collection}
  >
    {item =>
      item.type === 'section' ? (
        <Section
          section={item}
          state={state}
        />
      ) : (
        <Option
          {...item}
          key={item.key}
          value={item.value || undefined}
        >
          {item.rendered}
        </Option>
      )
    }
  </ListBox>
)
