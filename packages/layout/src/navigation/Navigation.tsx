'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Navigation.module.css'
import { Collection } from 'react-aria-components'
import { CollectionProps } from '@react-aria/collections'
import { clsx } from '@midas-ds/components'

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
    className={clsx(className, styles.navigation)}
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
