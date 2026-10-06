import { useState } from 'react'
import { Dialog as AriaDialog } from 'react-aria-components'
import { Button } from '../../button'
import { DialogTrigger } from '../../modal'
import { Popover } from '../../popover'
import type { Leaf } from './data'
import { SearchPanel } from './SearchPanel'
import { CountPill } from './CountPill'
import styles from './spikes.module.css'

export interface SearchPopoverProps {
  leaves: Leaf[]
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  triggerLabel: string
  searchLabel: string
  placeholder: string
  emptyText: string
  showCounts?: boolean
}

/**
 * Saves room: only a button is visible until the user wants to search. It
 * opens a Midas Popover with a React Aria Dialog, and inside it the same
 * SearchPanel as in A. This is the searchable menu pattern from React Aria's
 * Autocomplete docs. Changes apply directly, there's no draft.
 */
export const SearchPopover = ({
  leaves,
  selected,
  onSelectedChange,
  triggerLabel,
  searchLabel,
  placeholder,
  emptyText,
  showCounts,
}: SearchPopoverProps) => {
  const [query, setQuery] = useState('')

  return (
    <DialogTrigger onOpenChange={isOpen => !isOpen && setQuery('')}>
      <Button variant='secondary'>
        {triggerLabel}
        {showCounts && <CountPill count={selected.size} />}
      </Button>
      <Popover
        hideArrow
        placement='bottom start'
        className={styles.searchPopover}
      >
        <AriaDialog
          aria-label={searchLabel}
          className={styles.searchPopoverDialog}
        >
          <SearchPanel
            label={searchLabel}
            leaves={leaves}
            placeholder={placeholder}
            emptyText={emptyText}
            selected={selected}
            onSelectedChange={onSelectedChange}
            inputValue={query}
            onInputChange={setQuery}
            focusOnMount
          />
        </AriaDialog>
      </Popover>
    </DialogTrigger>
  )
}
