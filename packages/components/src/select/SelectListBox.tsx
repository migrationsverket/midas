import { Check } from 'lucide-react'
import { Collection, SelectState } from 'react-aria-components'
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
import type { SelectionMode } from './types'
import styles from './Select.module.css'

interface ListBoxProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends AriaListBoxOptions<T> {
  state: SelectState<T, M>
}

interface SectionProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> {
  section: Node<ListBoxSectionElement>
  state: SelectState<T, M>
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

const Section = <T extends ListBoxOption, M extends SelectionMode = 'single'>({
  section,
  state,
}: SectionProps<T, M>) => (
  <ListBoxSection {...(section.value as ListBoxSectionElement)}>
    {state.collection.getChildren ? (
      <Collection items={state.collection.getChildren(section.key)}>
        {item => <Option item={item as Node<ListBoxItemElement>} />}
      </Collection>
    ) : null}
  </ListBoxSection>
)

export const SelectListBox = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>({
  state,
  ...rest
}: ListBoxProps<T, M>) => (
  <ListBox
    {...rest}
    {...state}
    escapeKeyBehavior='none'
    selectionMode={state.selectionManager.selectionMode}
    onSelectionChange={keys => state.selectionManager.setSelectedKeys(keys)}
    selectedKeys={state.selectionManager.selectedKeys}
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
