import { Collection } from 'react-aria-components'
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
    {item.rendered}
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
