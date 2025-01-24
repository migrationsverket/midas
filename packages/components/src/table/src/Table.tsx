'use client'

import styles from './Table.module.css'

import type {
  RowProps,
  TableHeaderProps,
  ColumnProps,
  TableProps as AriaTableProps,
  CellProps
} from 'react-aria-components'

import {
  Collection,
  TableHeader as AriaTableHeader,
  useTableOptions,
  Column as AriaColumn,
  Row as AriaRow,
  Cell as AriaCell,
  Button,
  Table as AriaTable,
  TableBody
} from 'react-aria-components'
import { Checkbox } from '../../checkbox'
import {
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
  GripVertical
} from 'lucide-react'
import clsx from 'clsx'

export interface TableProps<T> extends AriaTableProps {
  narrow?: boolean
  striped?: boolean
  rows: T[]
}

export const Table = <T extends object>({
  narrow,
  striped,
  ...rest
}: TableProps<T>) => {
  const classNames = clsx(
    styles.table,
    narrow && styles.narrow,
    striped && styles.striped
  )

  return (
    <AriaTable
      className={classNames}
      {...rest}
    />
  )
}

export const TableHeader = <T extends object>({
  columns,
  children
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <AriaTableHeader className={styles.tableHeader}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column width={50}>
          {selectionMode === 'multiple' && <Checkbox slot='selection' />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableHeader>
  )
}

export const Row = <T extends object>({
  id,
  columns,
  children,
  ...rest
}: RowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <AriaRow
      id={id}
      className={clsx(styles.row)}
      {...rest}
    >
      {allowsDragging && (
        <Cell>
          <Button slot='drag'>
            <GripVertical size={20} />
          </Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot='selection' />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  )
}

export const Column = ({ children, ...rest }: ColumnProps) => {
  return (
    <AriaColumn
      className={styles.column}
      {...rest}
    >
      {({ allowsSorting, sortDirection }) => (
        <>
          {children}
          {allowsSorting && (
            <span
              aria-hidden='true'
              className='sort-indicator'
            >
              {sortDirection === 'ascending' ? (
                <ArrowUpWideNarrow size={20} />
              ) : (
                <ArrowDownNarrowWide size={20} />
              )}
            </span>
          )}
        </>
      )}
    </AriaColumn>
  )
}

export const Cell = ({ ...rest }: CellProps) => {
  return (
    <AriaCell
      className={styles.cell}
      {...rest}
    />
  )
}

export { TableBody }
