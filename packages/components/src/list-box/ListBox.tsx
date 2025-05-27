import {
  ListBox as AriaListBox,
  ListBoxProps,
  Virtualizer,
} from 'react-aria-components'
import clsx from 'clsx'
import { SectionedListLayout } from './SectionedListLayout'
import styles from './ListBox.module.css'

export const ListBox = <T extends object>({
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
