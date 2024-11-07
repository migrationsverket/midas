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
import { useListData } from 'react-stately'

interface MidasMultiSelect {
  label: string
  description?: string
  items: { name: string; id: string }[]
}

export const MultiSelect: React.FC<MidasMultiSelect> = ({
  label,
  description,
  items
}) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const list = useListData({
    initialItems: items
  })

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
              <ChevronDown
                height={16}
                width={16}
              />
            </div>
          </Button>
          <Popover
            className={styles.popover}
            style={{ width: triggerRef.current?.offsetWidth }}
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
              title={item.name}
              textValue={item.name}
            />
          )
        })}
      </TagGroup>
    </div>
  )
}

export default MultiSelect
