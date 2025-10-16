import {
  ListBox as AriaListBox,
  ListBoxProps,
  Virtualizer,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { SectionedListLayout } from './SectionedListLayout'
import type { Node } from '@react-types/shared'
import styles from './ListBox.module.css'

export const ListBox = <T extends object | Node<object>>({
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
