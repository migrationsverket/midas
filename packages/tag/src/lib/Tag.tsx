import React, { Children, useState } from 'react'
import styles from './Tag.module.css'
import {
  Button,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagList,
  TagListProps,
  Text,
  TagProps as AriaTagProps,
} from 'react-aria-components'
import { X } from 'lucide-react'
import { title } from 'process'

export interface TagGroupProp extends AriaTagGroupProps {
  children: React.ReactNode
  title?: string
}

export interface TagProps extends AriaTagProps {
  title?: string
}

export const TagGroup: React.FC<TagGroupProp> = ({
  children,
  onRemove,
  title,
  ...props
}) => {
  return (
    <AriaTagGroup className={styles.tagGroup}>
      <TagList className={styles.tagList}>
      {children}
      </TagList>
    </AriaTagGroup>
  )
}

export const Tag: React.FC<TagProps> = ({ title, ...props }) => {
  return (
    <AriaTag
      className={styles.tag}
      {...props}
    >
      {title}
      <Button
        className={styles.button}
        slot="remove"
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
