import { type Key } from 'react-aria-components'
import type { PaginationState, RowData, Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, ListBoxItem, Select, Text, useLocalizedStringFormatter } from '@midas-ds/components'
import messages from './intl/translations.json'
import styles from './Pagination.module.css'
import { FocusScope, useFocusManager } from 'react-aria'

type NavigationButtonsProps<T extends RowData> = Pick<
  PaginationProps<T>,
  'getCanNextPage' | 'getCanPreviousPage' | 'nextPage' | 'previousPage'
>

const NavigationButtons = <T extends RowData>({
  getCanNextPage,
  getCanPreviousPage,
  nextPage,
  previousPage,
}: NavigationButtonsProps<T>) => {
  const focusManager = useFocusManager()
  const strings = useLocalizedStringFormatter(messages)

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
        aria-label={strings.format('previousPage')}
        className={styles.button}
        isDisabled={!getCanPreviousPage()}
        onKeyDown={onKeyDown}
        onPress={previousPage}
        variant='icon'
      >
        <ChevronLeft />
      </Button>
      <Button
        aria-label={strings.format('nextPage')}
        className={styles.button}
        isDisabled={!getCanNextPage()}
        onKeyDown={onKeyDown}
        onPress={nextPage}
        variant='icon'
      >
        <ChevronRight />
      </Button>
    </>
  )
}

export interface PaginationProps<T extends RowData>
  extends Pick<
      Table<T>,
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

export const Pagination = <T extends RowData>(props: PaginationProps<T>) => {
  const {
    getPageCount,
    getRowCount,
    pageIndex,
    pageSize,
    pageSizeOptions = [10, 20, 30, 40, 50],
    setPageIndex,
    setPageSize,
  } = props
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
            className={styles.listBoxItem}
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
        {rowCount === 1 ? strings.format('row') : strings.format('rows')}
      </Text>
      <div className={styles.pageIndexContainer}>
        <Select
          aria-label={strings.format('selectPage')}
          className={styles.pageIndex}
          items={Array.from({ length: pageCount }, (_, i) => ({
            id: i.toString(),
            name: i,
          }))}
          onChange={handleChangePageIndex}
          value={pageIndex.toString()}
        >
          {item => (
            <ListBoxItem
              className={styles.listBoxItem}
              id={item.id}
              textValue={(Number(item.id) + 1).toString()}
            >
              {item.name + 1}
            </ListBoxItem>
          )}
        </Select>
        <Text className={styles.label}>
          {strings.format('of')} {pageCount}{' '}
          {pageCount === 1 ? strings.format('page') : strings.format('pages')}
        </Text>
      </div>
      <div className={styles.buttons}>
        <FocusScope>
          <NavigationButtons {...props} />
        </FocusScope>
      </div>
    </div>
  )
}
