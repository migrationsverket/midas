'use client'

import React from 'react'
import { GridListItem, GridListItemProps } from 'react-aria-components'
import { Check } from 'lucide-react'
import clsx from '../utils/clsx'
import styles from './List.module.css'

export interface ListItemProps extends Omit<GridListItemProps, 'children'> {
  /** Item content. Rendered in a flex row. Use `<ListItem.Trailing>` to push content to the right. */
  children: React.ReactNode
}

interface ListItemTrailingProps {
  children: React.ReactNode
  className?: string
}

const ListItemTrailing = ({ children, className }: ListItemTrailingProps) => (
  <div className={clsx(styles.trailing, className)}>{children}</div>
)

const ListItemBase = ({
  children,
  className,
  textValue,
  ...props
}: ListItemProps) => (
  <GridListItem
    {...props}
    textValue={typeof children === 'string' ? children : textValue}
    className={clsx(styles.listItem, className)}
  >
    {({ isSelected, isDisabled, selectionMode }) => (
      <>
        {selectionMode === 'multiple' && (
          <span
            className={clsx(
              styles.checkVisual,
              isSelected && styles.checked,
              isDisabled && styles.visualDisabled,
            )}
            aria-hidden
          >
            {isSelected && <Check size={12} strokeWidth={3} />}
          </span>
        )}
        {selectionMode === 'single' && (
          <span
            className={clsx(
              styles.radioVisual,
              isSelected && styles.radioSelected,
              isDisabled && styles.visualDisabled,
            )}
            aria-hidden
          />
        )}
        {children}
      </>
    )}
  </GridListItem>
)

export const ListItem = Object.assign(ListItemBase, { Trailing: ListItemTrailing })
