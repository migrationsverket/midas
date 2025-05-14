import React from 'react'
import styles from './Tag.module.css'
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagList,
  TagProps as AriaTagProps,
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '../button'
import clsx from 'clsx'

export interface TagGroupProp extends AriaTagGroupProps {
  children: React.ReactNode
}

export interface TagProps extends AriaTagProps {
  children: React.ReactNode
  dismissable?: boolean
  type?: 'default' | 'success' | 'info' | 'important' | 'warning'
}

export const TagGroup: React.FC<TagGroupProp> = ({ children, ...rest }) => {
  return (
    <AriaTagGroup {...rest}>
      <TagList className={styles.tagList}>{children}</TagList>
    </AriaTagGroup>
  )
}

export const Tag: React.FC<TagProps> = ({
  children,
  dismissable,
  className,
  type = 'default',
  ...props
}) => {
  return (
    <AriaTag
      className={clsx(
        styles.tag,
        dismissable && styles.dismissable,
        type === 'success' && styles.success,
        type === 'info' && styles.info,
        type === 'important' && styles.important,
        type === 'warning' && styles.warning,
        className,
      )}
      {...props}
    >
      <div className={styles.tagText}>{children}</div>
      {dismissable && (
        <Button
          variant='icon'
          size='medium'
          className={styles.button}
          slot='remove'
        >
          <X size={20} />
        </Button>
      )}
    </AriaTag>
  )
}
