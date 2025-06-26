import * as React from 'react'
import { X } from 'lucide-react'
import type { MultiSelectState, SelectProps } from './types'
import styles from './Select.module.css'
import { ListBoxOption } from '../list-box'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

interface MultiSelectValueTagProps extends SelectProps {
  state: MultiSelectState<ListBoxOption>
  parentWidth: number
  onClear: () => void
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
}

export const MultiSelectValueTag: React.FC<MultiSelectValueTagProps> = ({
  state: { selectedItems: items },
  isDisabled,
  parentWidth,
  onClear,
  triggerRef,
  isClearable,
}) => {
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
