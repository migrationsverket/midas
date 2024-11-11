'use client'

import styles from './MultiSelect.module.css'
import {
  Button,
  DialogTrigger,
  GridList,
  GridListItem,
  Popover
} from 'react-aria-components'
import { InputWrapper } from '@midas-ds/textfield'
import { Checkbox } from '@midas-ds/checkbox'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { TagGroup, Tag } from '@midas-ds/tag'
import { Key, useListData } from 'react-stately'

interface MidasMultiSelect {
  label: string
  description?: string
  items: { name: string; id: string }[]
  onSelectionChange?: (selectedKeys: Set<Key>) => void
}

export const MultiSelect: React.FC<MidasMultiSelect> = ({
  label,
  description,
  items,
  onSelectionChange
}) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [popoverWidth, setPopoverWidth] = React.useState<number | undefined>(
    undefined
  )

  React.useEffect(() => {
    const updatePopoverWidth = () => {
      if (triggerRef.current) {
        setPopoverWidth(triggerRef.current.offsetWidth - 2)
      }
    }

    updatePopoverWidth()

    window.addEventListener('resize', updatePopoverWidth)

    return () => {
      window.removeEventListener('resize', updatePopoverWidth)
    }
  }, [])

  const list = useListData({
    initialItems: items
  })

  React.useEffect(() => {
    if (onSelectionChange) onSelectionChange(new Set(list.selectedKeys))
  }, [list.selectedKeys, onSelectionChange])

  return (
    <div className={styles.multiSelect}>
      <InputWrapper
        label={label}
        description={description}
      >
        <DialogTrigger>
          <Button
            className={styles.button}
            ref={triggerRef}
          >
            Välj
            <div
              className={styles.icon}
              aria-hidden='true'
            >
              <ChevronDown size={20} />
            </div>
          </Button>
          <Popover
            className={styles.popover}
            style={{ width: popoverWidth }}
            offset={0}
          >
            <GridList
              aria-label={label}
              selectionMode='multiple'
              selectedKeys={list.selectedKeys}
              onSelectionChange={list.setSelectedKeys}
            >
              {list.items.map(item => {
                return (
                  <GridListItem
                    key={item.id}
                    id={item.id}
                    textValue={item.name}
                    className={styles.listBoxItem}
                  >
                    <Checkbox slot='selection' />
                    {item.name}
                  </GridListItem>
                )
              })}
            </GridList>
          </Popover>
        </DialogTrigger>
      </InputWrapper>
      <TagGroup
        aria-label='Valda'
        onRemove={keys => list.remove(...keys)}
      >
        {Array.from(list.selectedKeys).map(key => {
          const item = list.getItem(key)
          return (
            <Tag
              key={item.id}
              id={item.id}
              textValue={item.name}
            >
              {item.name}
            </Tag>
          )
        })}
      </TagGroup>
    </div>
  )
}

export default MultiSelect
