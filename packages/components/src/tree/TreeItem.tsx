import { type ReactNode } from 'react'
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

export interface TreeItemProps<T extends object>
  extends Omit<AriaTreeItemProps<T>, 'children'> {
  /**
   * This row's own display — checkbox, icon, label, badge, or plain text.
   * Omit for a purely structural row with no content of its own.
   */
  content?: ReactNode
  /** Nested rows, if this is a branch. */
  children?: ReactNode
}

/**
 * A row in a Tree. Takes no cascade-selection or other feature-specific
 * props — `content` is whatever a row needs to show, composed freely by the
 * consumer; `children` is nested rows only. No children-type inspection:
 * `content` and `children` are unambiguous, explicit props, matching RAC's
 * own TreeItemContent-vs-nested-TreeItem convention rather than partitioning
 * by element type.
 */
export const TreeItem = <T extends object>({
  children,
  className,
  content,
  textValue,
  ...rest
}: TreeItemProps<T>) => (
  <AriaTreeItem
    className={clsx(styles.treeItem, className)}
    textValue={textValue || (typeof content === 'string' ? content : '')}
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
          {content}
        </div>
      )}
    </TreeItemContent>
    {children}
  </AriaTreeItem>
)
