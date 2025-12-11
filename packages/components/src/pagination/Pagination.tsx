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
    setPageIndex(typeof value === 'string' ? Number(value) : value || 0)
  }

  const handleChangePageSize = (value: Key | null) => {
    const newPageSize =
      typeof value === 'string' ? parseInt(value) : value || pageSize
    setPageSize(newPageSize)
    setPageIndex(findPage(firstVisibleItem, newPageSize))
  }

  return (
    <div className={styles.pagination}>
      <Select
        className={styles.pageSize}
        items={pageSizeOptions.map(size => ({ id: size, name: size }))}
        label={strings.format('rowsPerPage')}
        onChange={handleChangePageSize}
        value={pageSize}
      >
        {item => (
          <ListBoxItem
            id={item.id}
            textValue={item.id.toString()}
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
            id: n,
            name: n,
          }))}
          onChange={handleChangePageIndex}
          value={pageIndex}
        >
          {item => (
            <ListBoxItem
              id={item.id}
              textValue={Number(item.id + 1).toString()}
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
        <Button
          aria-label={strings.format('previousPage')}
          isDisabled={!getCanPreviousPage()}
          onPress={previousPage}
          variant='icon'
        >
          <ChevronLeft />
        </Button>
        <Button
          aria-label={strings.format('nextPage')}
          isDisabled={!getCanNextPage()}
          onPress={nextPage}
          variant='icon'
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
