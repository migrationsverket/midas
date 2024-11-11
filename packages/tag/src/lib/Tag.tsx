import React from 'react'
import styles from './Tag.module.css'
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagList,
  TagProps as AriaTagProps
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '@midas-ds/button'

export interface TagGroupProp extends AriaTagGroupProps {
  children: React.ReactNode
}

export interface TagProps extends AriaTagProps {
  children: React.ReactNode
}

export const TagGroup: React.FC<TagGroupProp> = ({ children, ...rest }) => {
  return (
    <AriaTagGroup {...rest}>
      <TagList className={styles.tagList}>{children}</TagList>
    </AriaTagGroup>
  )
}

export const Tag: React.FC<TagProps> = ({ children, ...props }) => {
  return (
    <AriaTag
      className={styles.tag}
      {...props}
    >
      <div className={styles.tagText}>{children}</div>
      <Button
        variant='icon'
        size='small'
        className={styles.button}
        slot='remove'
      >
        <X
          className={styles.icon}
          height={16}
          width={16}
        />
      </Button>
    </AriaTag>
  )
}
