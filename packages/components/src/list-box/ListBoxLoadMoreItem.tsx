import * as React from 'react'
import clsx from 'clsx'
import {
  ListBoxLoadMoreItem as AriaListBoxLoadMoreItem,
  type ListBoxLoadMoreItemProps,
} from 'react-aria-components'
import { Spinner } from '../spinner'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './ListBox.module.css'

export type { ListBoxLoadMoreItemProps }

export const ListBoxLoadMoreItem: React.FC<ListBoxLoadMoreItemProps> = ({
  className,
  children,
  isLoading,
  ...rest
}) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <AriaListBoxLoadMoreItem
      className={clsx(styles.listBoxLoadMoreItem, className)}
      isLoading={isLoading}
      {...rest}
    >
      {children || (
        <>
          <Spinner small />
          <span aria-hidden>{strings.format('loading...')}</span>
        </>
      )}
    </AriaListBoxLoadMoreItem>
  )
}
