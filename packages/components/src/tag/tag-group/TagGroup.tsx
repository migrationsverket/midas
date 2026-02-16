import { Children, forwardRef, isValidElement } from 'react'
import {
  TagGroup as AriaTagGroup,
  TagGroupContext,
  useContextProps,
  type TagGroupProps,
} from 'react-aria-components'
import clsx from '../../utils/clsx'
import { TagList } from '../tag-list'

export type { TagGroupProps }

export const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  (props, ref) => {
    const [{ className, children, ...rest }, mergedRef] = useContextProps(
      props,
      ref,
      TagGroupContext,
    )

    const providedTagList = Children.toArray(children)
      .filter(isValidElement)
      .find(child => child.type === TagList)

    // @deprecated since v17.0.0
    if (!providedTagList && process.env.NODE_ENV === 'development') {
      console.warn(
        'Using a TagGroup without providing a TagList component is deprecated since v17.0.0, see: https://designsystem.migrationsverket.se/components/tag/',
      )
    }

    return (
      <AriaTagGroup
        className={clsx(className)}
        ref={mergedRef}
        {...rest}
      >
        {providedTagList ? children : <TagList>{children}</TagList>}
      </AriaTagGroup>
    )
  },
)

TagGroup.displayName = 'TagGroup'
