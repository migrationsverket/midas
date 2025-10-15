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
import {
  FieldError,
  Label,
  Text,
  ListBoxItem,
  Popover,
  InfoPopoverProps,
} from '../'
import { ChevronDown } from 'lucide-react'
import styles from './RacSelect.module.css'
import { useRef } from 'react'
import { SelectValueTag } from './SelectValueTag'
import { LabelWrapper } from '../label/LabelWrapper'
import { SelectTags } from './SelectTags'

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
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  /**
   * The position of the error message
   * @default "top"
   */
  errorPosition?: 'top' | 'bottom'
  /**
   * Show selected items as tags below select
   */
  showTags?: boolean
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
  popover,
  ...props
}: RacSelectProps<T, M>) {
  const { selectionMode = 'single', errorPosition = 'top' } = props

  const triggerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <Select
      {...props}
      className={styles.select}
    >
      <LabelWrapper popover={popover}>
        {label && (
          <Label data-disabled={props.isDisabled || undefined}>{label}</Label>
        )}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
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
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <Popover className={styles.popover}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
      <SelectTags {...props} />
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
