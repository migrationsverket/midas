import {
  Tree as AriaTree,
  type TreeProps as AriaTreeProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tree.module.css'

export type TreeProps<T extends object> = AriaTreeProps<T>

export const Tree = <T extends object>({
  className,
  children,
  ...rest
}: TreeProps<T>) => (
  <AriaTree
    className={clsx(styles.tree, className)}
    {...rest}
  >
    {children}
  </AriaTree>
)
