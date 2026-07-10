'use client'

import React from 'react'
import { GridList, GridListProps } from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './List.module.css'
import { ListHeader } from './ListHeader'

export type ListSelectionMode = 'none' | 'single' | 'multiple'

export type HeaderSlotState = { selectedCount: number; totalCount: number }

export interface ListProps<T extends object>
  extends Omit<GridListProps<T>, 'selectionMode' | 'selectionBehavior'> {
  /** Selection behavior. `single` renders radio visuals, `multiple` renders checkboxes. */
  selectionMode?: ListSelectionMode
  /** Alternating row colors. */
  striped?: boolean
  /** Renders a header above the list with the given label. */
  label?: string
  /** Renders a select-all checkbox in the header. Requires `label` and `selectionMode="multiple"`. */
  showSelectAll?: boolean
  /**
   * Content rendered on the right side of the header. Pass a ReactNode for static content,
   * or a function to access `selectedCount` and `totalCount` from the list's internal state.
   * Requires `label`.
   * @example
   * headerSlot={<span>{items.length} poster</span>}
   * headerSlot={({ selectedCount, totalCount }) => <span>{selectedCount} av {totalCount} valda</span>}
   */
  headerSlot?: React.ReactNode | ((state: HeaderSlotState) => React.ReactNode)
}

export const List = <T extends object>({
  selectionMode = 'none',
  striped = false,
  label,
  showSelectAll = false,
  headerSlot,
  className,
  children,
  selectedKeys,
  onSelectionChange,
  ...props
}: ListProps<T>) => {
  const totalCount = React.Children.count(children)
  const selectedCount = selectedKeys instanceof Set ? selectedKeys.size : 0
  const isAllSelected = selectedKeys === 'all'
  const isPartial = selectedCount > 0

  const resolvedHeaderSlot =
    typeof headerSlot === 'function'
      ? headerSlot({ selectedCount, totalCount })
      : headerSlot

  return (
    <>
      {label && (
        <ListHeader
          label={label}
          showSelectAll={showSelectAll && selectionMode === 'multiple'}
          isSelectAllSelected={isAllSelected}
          isSelectAllIndeterminate={isPartial}
          onSelectAllChange={checked =>
            onSelectionChange?.(checked ? 'all' : new Set())
          }
        >
          {resolvedHeaderSlot}
        </ListHeader>
      )}
      <GridList
        {...props}
        selectionMode={selectionMode}
        selectionBehavior={selectionMode === 'single' ? 'replace' : 'toggle'}
        className={clsx(styles.list, className)}
        selectedKeys={selectedKeys}
        onSelectionChange={onSelectionChange}
        data-striped={striped || undefined}
      >
        {children}
      </GridList>
    </>
  )
}
