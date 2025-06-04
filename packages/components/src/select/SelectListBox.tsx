import * as React from 'react'
import { Check } from 'lucide-react'
import { Collection } from 'react-aria-components'
import { Checkbox } from '../checkbox'
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  isSelectionEmpty,
  type ListBoxItemElement,
  type ListBoxOption,
  type ListBoxSectionElement,
} from '../list-box'
import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node, Selection } from '@react-types/shared'
import type { MultiSelectState, SelectProps } from './types'
import styles from './Select.module.css'

interface ListBoxProps<T extends ListBoxOption> extends AriaListBoxOptions<T> {
  state: MultiSelectState<T>
  isClearable: SelectProps['isClearable']
}

interface SectionProps {
  section: Node<ListBoxSectionElement>
  state: MultiSelectState<ListBoxOption>
}

interface OptionProps {
  item: Node<ListBoxItemElement>
}

const Option = ({ item }: OptionProps) => (
  <ListBoxItem
    {...item.value}
    textValue={item.textValue}
  >
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
        {item.rendered}
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

const Section = ({ section, state }: SectionProps) => (
  <ListBoxSection {...(section.value as ListBoxSectionElement)}>
    {state.collection.getChildren ? (
      <Collection items={state.collection.getChildren(section.key)}>
        {item => <Option item={item as Node<ListBoxItemElement>} />}
      </Collection>
    ) : null}
  </ListBoxSection>
)

export const SelectListBox = <T extends ListBoxOption>({
  state,
  isClearable,
  ...rest
}: ListBoxProps<T>) => {
  const handleSelectionChange = (currentSelection: Selection) => {
    const previousSelection = state.selectedKeys

    if (
      state.selectionMode === 'single' &&
      isSelectionEmpty(currentSelection) &&
      !isClearable
    ) {
      state.setSelectedKeys(previousSelection)
      return state.close()
    }

    return state.setSelectedKeys(currentSelection)
  }

  return (
    <ListBox
      {...rest}
      {...state}
      escapeKeyBehavior='none'
      onSelectionChange={handleSelectionChange}
      items={state.collection}
    >
      {item =>
        item.type === 'section' ? (
          <Section
            state={state}
            section={item as Node<ListBoxSectionElement>}
          />
        ) : (
          <Option item={item as Node<ListBoxItemElement>} />
        )
      }
    </ListBox>
  )
}
