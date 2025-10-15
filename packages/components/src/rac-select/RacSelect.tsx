import {
  ListBoxItemProps,
  SelectProps,
  ValidationResult,
} from 'react-aria-components'
import {
  // FieldError,
  // Text,
  Select,
  // Label,
  SelectValue,
  Button,
  ListBox,
  // ListBoxItem,
  // Popover
} from 'react-aria-components'
import { FieldError, Label, Text, ListBoxItem, Popover } from '../'
import { ChevronDown } from 'lucide-react'
import styles from './RacSelect.module.css'
import { useRef } from 'react'
import { SelectValueTag } from './SelectValueTag'

export interface RacSelectProps<
  T extends object,
  M extends 'single' | 'multiple',
> extends Omit<SelectProps<T, M>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  isClearable?: boolean
}

export function RacSelect<
  T extends object,
  M extends 'single' | 'multiple' = 'single',
>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: RacSelectProps<T, M>) {
  const { selectionMode = 'single' } = props

  const triggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Select
      {...props}
      className={styles.select}
    >
      <Label>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      <div
        className={styles.triggerContainer}
        data-disabled={props.isDisabled || undefined}
      >
        <Button
          className={styles.trigger}
          ref={triggerRef}
        >
          <span aria-hidden='true'>
            <ChevronDown size={16} />
          </span>
        </Button>
        <SelectValue
          className={styles.selectValue}
          data-disabled={props.isDisabled || undefined}
        >
          {renderProps =>
            renderProps.isPlaceholder || selectionMode === 'single' ? (
              renderProps.defaultChildren
            ) : (
              <SelectValueTag
                {...props}
                {...renderProps}
                triggerRef={triggerRef}
              />
            )
          }
        </SelectValue>
      </div>
      <FieldError>{errorMessage}</FieldError>
      <Popover className={styles.popover}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </Select>
  )
}

export function RacItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={styles.listBoxItem}
      /*className={({ isFocused, isSelected }) =>
        `item${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`
      }*/
    />
  )
}
