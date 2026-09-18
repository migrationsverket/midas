import {
  ListBox as AriaListBox,
  type ListBoxProps as AriaListBoxProps,
  Virtualizer,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { SectionedListLayout } from './SectionedListLayout'
import styles from './ListBox.module.css'

export interface ListBoxProps<T extends object> extends AriaListBoxProps<T> {
  /** @default true */
  virtualized?: boolean
  /**
   * Compact item sizing (smaller text/padding) for standalone use in
   * confined spaces, e.g. the Calendar month/year picker.
   */
  size?: 'small'
}

export const ListBox = <T extends object>({
  className,
  children,
  virtualized = true,
  size,
  ...rest
}: ListBoxProps<T>) => {
  const listBox = (
    <AriaListBox
      className={clsx(styles.listBox, className)}
      data-size={size}
      {...rest}
    >
      {children}
    </AriaListBox>
  )

  if (!virtualized) {
    return listBox
  }

  return (
    <Virtualizer
      layout={SectionedListLayout}
      layoutOptions={{ estimatedHeadingSize: 38 }}
    >
      {listBox}
    </Virtualizer>
  )
}
