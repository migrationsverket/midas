import * as React from 'react'
import {
  Button,
  TreeItem as AriaTreeItem,
  TreeItemContent,
  type TreeItemContentRenderProps,
  type TreeItemProps as AriaTreeItemProps,
} from 'react-aria-components'
import { ChevronRight } from 'lucide-react'
import clsx from '../utils/clsx'
import styles from './Tree.module.css'

export type TreeItemProps<T extends object> = AriaTreeItemProps<T>

/**
 * A row in a Tree. Takes no cascade-selection or other feature-specific
 * props — whatever a row needs to show (checkbox, icon, label, ...) is
 * composed as children by the consumer. Children of type `TreeItem` are
 * treated as nested rows; everything else is treated as this row's content.
 */
export const TreeItem = <T extends object>({
  children,
  className,
  textValue,
  ...rest
}: TreeItemProps<T>) => {
  const childArray = React.Children.toArray(children)

  const nestedItems = childArray.filter(
    child => React.isValidElement(child) && child.type === TreeItem,
  )
  const rowContent = childArray.filter(
    child => !(React.isValidElement(child) && child.type === TreeItem),
  )

  return (
    <AriaTreeItem
      className={clsx(styles.treeItem, className)}
      textValue={
        textValue || (typeof children === 'string' ? children : '')
      }
      {...rest}
    >
      <TreeItemContent>
        {({ hasChildItems }: TreeItemContentRenderProps) => (
          <div className={styles.rowContent}>
            {hasChildItems && (
              <Button
                slot='chevron'
                className={styles.chevron}
              >
                <ChevronRight
                  size={16}
                  className={styles.chevronIcon}
                />
              </Button>
            )}
            {rowContent}
          </div>
        )}
      </TreeItemContent>
      {nestedItems}
    </AriaTreeItem>
  )
}
