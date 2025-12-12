import { type Key } from 'react-aria-components'
import type { PaginationState, RowData, Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { ListBoxItem } from '../list-box'
import { Select } from '../select'
import { Text } from '../text'
import { findPage } from './utils'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './Pagination.module.css'
import { FocusScope, useFocusManager } from 'react-aria'
import type React from 'react'

interface NavigationButtonsProps<TData extends RowData>
  extends Pick<
    PaginationProps<TData>,
    'getCanNextPage' | 'getCanPreviousPage' | 'nextPage' | 'previousPage'
  > {
  nextPageLabel: string
  previousPageLabel: string
}

const NavigationButtons = <T extends RowData>({
  getCanNextPage,
  getCanPreviousPage,
  nextPage,
  previousPage,
  nextPageLabel,
  previousPageLabel,
}: NavigationButtonsProps<T>) => {
  const focusManager = useFocusManager()

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        focusManager?.focusNext({ wrap: true })
        break
      case 'ArrowLeft':
        focusManager?.focusPrevious({ wrap: true })
        break
    }
  }

  return (
    <>
      <Button
        onKeyDown={onKeyDown}
        aria-label={previousPageLabel}
        isDisabled={!getCanPreviousPage()}
        onPress={previousPage}
        variant='icon'
      >
        <ChevronLeft />
      </Button>
      <Button
        onKeyDown={onKeyDown}
        aria-label={nextPageLabel}
        isDisabled={!getCanNextPage()}
        onPress={nextPage}
        variant='icon'
      >
        <ChevronRight />
      </Button>
    </>
  )
}

export interface PaginationProps<TData extends RowData>
  extends Pick<
      Table<TData>,
      | 'getCanNextPage'
      | 'getCanPreviousPage'
      | 'getPageCount'
      | 'getRowCount'
      | 'nextPage'
      | 'previousPage'
      | 'setPageIndex'
      | 'setPageSize'
    >,
    PaginationState {
  /**
   * Options for different page sizes
   * @default [10, 20, 30, 40, 50]
   */
  pageSizeOptions?: number[]
}

export const Pagination = <T extends RowData>({
  getCanNextPage,
  getCanPreviousPage,
  getPageCount,
  getRowCount,
  nextPage,
  pageIndex,
  pageSize,
  pageSizeOptions = [10, 20, 30, 40, 50],
  previousPage,
  setPageIndex,
  setPageSize,
}: PaginationProps<T>) => {
  const strings = useLocalizedStringFormatter(messages)
  const pageCount = getPageCount()
  const rowCount = getRowCount()
  const lastVisibleItem = (pageIndex + 1) * pageSize
  const firstVisibleItem = lastVisibleItem - pageSize + 1

  const handleChangePageIndex = (value: Key | null) => {
    setPageIndex(value !== null ? Number(value) : 0)
  }

  const handleChangePageSize = (value: Key | null) => {
    const newPageSize = value !== null ? Number(value) : pageSize
    setPageSize(newPageSize)
    setPageIndex(findPage(firstVisibleItem, newPageSize))
  }

  return (
    <div className={styles.pagination}>
      <Select
        className={styles.pageSize}
        items={pageSizeOptions.map(size => ({
          id: size.toString(),
          name: size,
        }))}
        label={strings.format('rowsPerPage')}
        onChange={handleChangePageSize}
        value={pageSize.toString()}
      >
        {item => (
          <ListBoxItem
            id={item.id}
            textValue={item.id}
          >
            {item.name}
          </ListBoxItem>
        )}
      </Select>
      <Text className={styles.result}>
        {firstVisibleItem} -{' '}
        {lastVisibleItem > rowCount ? rowCount : lastVisibleItem}{' '}
        {strings.format('of')} {rowCount.toLocaleString()}{' '}
        {strings.format('rows')}
      </Text>
      <div className={styles.pageIndexContainer}>
        <Select
          aria-label={strings.format('selectPage')}
          className={styles.pageIndex}
          items={[...Array(pageCount).keys()].map(n => ({
            id: n.toString(),
            name: n,
          }))}
          onChange={handleChangePageIndex}
          value={pageIndex.toString()}
        >
          {item => (
            <ListBoxItem
              id={item.id}
              textValue={(Number(item.id) + 1).toString()}
            >
              {item.name + 1}
            </ListBoxItem>
          )}
        </Select>
        <Text>
          {strings.format('of')} {pageCount} {strings.format('pages')}
        </Text>
      </div>
      <div className={styles.buttons}>
        <FocusScope>
          <NavigationButtons
            getCanNextPage={getCanNextPage}
            getCanPreviousPage={getCanPreviousPage}
            nextPage={nextPage}
            previousPage={previousPage}
            nextPageLabel={strings.format('nextPage')}
            previousPageLabel={strings.format('previousPage')}
          />
        </FocusScope>
      </div>
    </div>
  )
}
