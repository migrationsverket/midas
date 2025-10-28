import { useListState } from '@react-stately/list'
import type { Key, Node } from '@react-types/shared'
import type { MultiSelectListProps, MultiSelectListState } from './types'
import { ListBoxOption } from '../list-box'

export function useMultiSelectListState<T extends ListBoxOption>(
  props: MultiSelectListProps<T>,
): MultiSelectListState<T> {
  const {
    collection,
    disabledKeys,
    selectionManager,
    selectionManager: { setSelectedKeys, selectedKeys, selectionMode },
  } = useListState(props)

  const missingKeys: Key[] = []

  const selectedItems =
    selectedKeys.size !== 0
      ? (Array.from(selectedKeys)
          .map(key => {
            const item = collection.getItem(key)

            if (!item) {
              missingKeys.push(key)
            }

            return item
          })
          .filter(Boolean) as Node<T>[])
      : null

  if (missingKeys.length) {
    console.warn(
      `Select: Keys "${missingKeys.join(
        ', ',
      )}" passed to "selectedKeys" are not present in the collection.`,
    )
  }

  return {
    collection,
    disabledKeys,
    selectionManager,
    selectionMode,
    selectedKeys,
    setSelectedKeys: setSelectedKeys.bind(selectionManager),
    selectedItems,
  }
}
