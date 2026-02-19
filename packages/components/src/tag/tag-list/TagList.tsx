import {
  TagList as AriaTaglist,
  TagListContext,
  useContextProps,
  type TagListProps,
} from 'react-aria-components'
import styles from './TagList.module.css'
import clsx from '../../utils/clsx'
import { ForwardedRef, forwardRef } from 'react'

export type { TagListProps }

const TagListInner = <T extends object>(
  props: TagListProps<T>,
  ref?: ForwardedRef<HTMLDivElement>,
) => {
  const [{ className, ...rest }, mergedRef] = useContextProps(
    props,
    ref,
    TagListContext,
  )

  return (
    <AriaTaglist
      className={clsx(className, styles.tagList)}
      ref={mergedRef}
      {...rest}
    />
  )
}

export const TagList = forwardRef(TagListInner) as <T>(
  props: TagListProps<T>,
  ref?: ForwardedRef<HTMLDivElement>,
) => ReturnType<typeof TagListInner>
