import {
  ListBox as AriaListBox,
  ListBoxProps,
  Virtualizer,
} from 'react-aria-components'
import clsx from 'clsx'
import { SectionedListLayout } from './SectionedListLayout'
import { ListBoxOption } from './types'
import type { Node } from '@react-types/shared'
import styles from './ListBox.module.css'

export const ListBox = <T extends ListBoxOption | Node<ListBoxOption>>({
  className,
  children,
  ...rest
}: ListBoxProps<T>) => (
  <Virtualizer
    layout={SectionedListLayout}
    layoutOptions={{
      headingHeight: 44,
    }}
  >
    <AriaListBox
      className={clsx(styles.listBox, className)}
      {...rest}
    >
      {children}
    </AriaListBox>
  </Virtualizer>
)
