'use client'

import styles from './MultiSelect.module.css'
import {
  Button,
  DialogTrigger,
  GridList,
  GridListItem,
  Popover,
  ValidationResult,
  Provider,
  FieldErrorContext
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
  isDisabled?: boolean
  isInvalid?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
}

export const MultiSelect: React.FC<MidasMultiSelect> = ({
  label,
  description,
  items,
  onSelectionChange,
  selectedKeys,
  defaultSelectedKeys,
  isDisabled,
  isInvalid,
  errorMessage
}) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [popoverWidth, setPopoverWidth] = React.useState<number | undefined>(
    undefined
  )
  const list = useListData({
    initialItems: items,
    initialSelectedKeys: defaultSelectedKeys
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

  const tagList =
    list.selectedKeys === 'all'
      ? new Set(
          list.items.map(item => {
            return item.id
          })
        )
      : list.selectedKeys

  return (
    <div
      className={styles.multiSelect}
      data-disabled={isDisabled}
      data-invalid={isInvalid}
    >
      <Provider
        values={[
          [
            // we should maybe add more here
            // [LabelContext, {...labelProps, ref: labelRef}],
            // [InputContext, {...inputProps, ref: inputOrTextAreaRef}],
            // [TextAreaContext, {...inputProps, ref: inputOrTextAreaRef}],
            // [TextContext, {
            //   slots: {
            //     description: descriptionProps,
            //     errorMessage: errorMessageProps
            //   }
            // }],
            FieldErrorContext,
            {
              isInvalid: isInvalid ? isInvalid : false,
              validationErrors: [],
              validationDetails: {
                customError: isInvalid ? isInvalid : false,
                badInput: false,
                patternMismatch: false,
                rangeOverflow: false,
                rangeUnderflow: false,
                stepMismatch: false,
                tooLong: false,
                tooShort: false,
                typeMismatch: false,
                valid: false,
                valueMissing: false
              }
            }
          ]
        ]}
      >
        <InputWrapper
          label={label}
          description={description}
          errorMessage={errorMessage}
        >
          <DialogTrigger>
            <Button
              className={styles.button}
              ref={triggerRef}
              isDisabled={isDisabled}
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
              UNSTABLE_portalContainer={triggerRef.current || undefined}
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
          onRemove={keys => {
            const newSelectedKeys = new Set(
              [...list.selectedKeys].filter(key => !keys.has(key))
            )
            list.setSelectedKeys(newSelectedKeys)
          }}
        >
          {Array.from(tagList).map(key => {
            const item = list.getItem(key)

            return (
              <Tag
                key={item.id}
                id={item.id}
                textValue={item.name}
                isDisabled={isDisabled}
                dismissable
              >
                {item.name}
              </Tag>
            )
          })}
        </TagGroup>
      </Provider>
    </div>
  )
}

export default MultiSelect
