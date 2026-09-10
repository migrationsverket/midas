import { forwardRef, type ReactElement, type Ref } from 'react'
import {
  Tree as AriaTree,
  type TreeProps as AriaTreeProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tree.module.css'

export type TreeProps<T extends object> = AriaTreeProps<T>

// forwardRef can't express a generic prop type directly — this is the
// standard workaround: implement against a widened signature, then cast the
// export to the real generic one below.
export const Tree = forwardRef<
  HTMLDivElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TreeProps<any>
>(({ className, children, ...rest }, ref) => (
  <AriaTree
    ref={ref}
    className={clsx(styles.tree, className)}
    {...rest}
  >
    {children}
  </AriaTree>
)) as <T extends object>(
  props: TreeProps<T> & { ref?: Ref<HTMLDivElement> },
) => ReactElement
