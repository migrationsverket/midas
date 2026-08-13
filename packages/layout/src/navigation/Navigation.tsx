'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Navigation.module.css'
import { Collection, CollectionProps } from 'react-aria-components'

export type NavigationProps<T extends object> = CollectionProps<T> &
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'>

export const Navigation = <T extends object>({
  className,
  items,
  children,
  dependencies,
  idScope,
  addIdAndValue,
  ...rest
}: NavigationProps<T>) => (
  <nav
    className={className}
    {...rest}
  >
    <ul className={styles.rootList}>
      <Collection
        items={items}
        children={children}
        dependencies={dependencies}
        idScope={idScope}
        addIdAndValue={addIdAndValue}
      />
    </ul>
  </nav>
)
