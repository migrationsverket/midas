import * as React from 'react'
import { Check } from 'lucide-react'
import { Collection } from 'react-aria-components'
import { Checkbox } from '../checkbox'
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  type ListBoxItemElement,
  type ListBoxOption,
  type ListBoxSectionElement,
} from '../list-box'
import type { AriaListBoxOptions } from '@react-aria/listbox'
import type { Node } from '@react-types/shared'
import type { MultiSelectState } from './types'
import styles from './Select.module.css'

interface ListBoxProps<T extends ListBoxOption> extends AriaListBoxOptions<T> {
  state: MultiSelectState<T>
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
    aria-label={item.textValue}
  >
    {({ isDisabled, isSelected, selectionMode }) => (
      <>
        {selectionMode === 'multiple' ? (
          <div
            className={styles.checkboxContainer}
            aria-hidden
          >
            <Checkbox
              isDisabled={isDisabled}
              isSelected={isSelected}
              isReadOnly
              excludeFromTabOrder
              aria-label={item.textValue}
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
          state={state}
          section={item as Node<ListBoxSectionElement>}
        />
      ) : (
        <Option item={item as Node<ListBoxItemElement>} />
      )
    }
  </ListBox>
)
