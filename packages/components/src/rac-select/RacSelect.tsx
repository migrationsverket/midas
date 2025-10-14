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

interface RacSelectProps<T extends object, M extends 'single' | 'multiple'>
  extends Omit<SelectProps<T, M>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
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
  return (
    <Select
      {...props}
      className={styles.select}
    >
      <Label>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      <Button className={styles.trigger}>
        <SelectValue />
        <span aria-hidden='true'>
          <ChevronDown size={16} />
        </span>
      </Button>
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
