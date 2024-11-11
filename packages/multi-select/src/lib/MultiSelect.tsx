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
  selectedKeys?: string[]
  defaultSelectedKeys?: string[] | 'all'
}

export const MultiSelect: React.FC<MidasMultiSelect> = ({
  label,
  description,
  items,
  onSelectionChange,
  selectedKeys,
  defaultSelectedKeys
}) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [popoverWidth, setPopoverWidth] = React.useState<number | undefined>(
    undefined
  )
  const list = useListData({
    initialItems: items,
    initialSelectedKeys: defaultSelectedKeys ? defaultSelectedKeys : []
  })

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

  React.useEffect(() => {
    if (onSelectionChange) onSelectionChange(new Set(list.selectedKeys))
  }, [list.selectedKeys, onSelectionChange])

  React.useEffect(() => {
    if (selectedKeys) list.setSelectedKeys(new Set(selectedKeys))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKeys])

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
          if (item)
            return (
              <Tag
                key={item.id}
                id={item.id}
                textValue={item.name}
              >
                {item.name}
              </Tag>
            )
          return null
        })}
      </TagGroup>
    </div>
  )
}

export default MultiSelect
