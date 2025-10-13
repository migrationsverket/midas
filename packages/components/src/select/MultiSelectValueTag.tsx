import * as React from 'react'
import { X } from 'lucide-react'
import type { SelectionMode, SelectProps } from './types'
import styles from './Select.module.css'
import { ListBoxOption } from '../list-box'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { SelectState } from 'react-stately'

interface MultiSelectValueTagProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends SelectProps<T, M> {
  state: SelectState<T, M>
  parentWidth: number
  onClear: () => void
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
}

export const MultiSelectValueTag = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>({
  state: { selectedItems: items },
  isDisabled,
  parentWidth,
  onClear,
  triggerRef,
  isClearable,
}: MultiSelectValueTagProps<T, M>) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <div
      className={styles.selectValueTag}
      data-disabled={isDisabled || undefined}
    >
      <span
        className={styles.truncate}
        style={{ maxWidth: parentWidth - 92 }}
      >
        {items?.length && items.length > 1
          ? `${items.length} ${strings.format('chosen')}`
          : items?.[0].textValue}
      </span>
      {isClearable && (
        <button
          disabled={isDisabled}
          aria-label={strings.format('clearAll')}
          className={styles.clearButton}
          onClick={() => {
            onClear()
            triggerRef?.current?.focus()
          }}
        >
          <X
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  )
}
