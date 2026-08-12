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
}

export const ListBox = <T extends object>({
  className,
  children,
  virtualized = true,
  ...rest
}: ListBoxProps<T>) => {
  const listBox = (
    <AriaListBox
      className={clsx(styles.listBox, className)}
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
      layoutOptions={{
        headingHeight: 38,
      }}
    >
      {listBox}
    </Virtualizer>
  )
}
