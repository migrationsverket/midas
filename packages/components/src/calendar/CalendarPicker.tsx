import { Key, Select as AriaSelect } from 'react-aria-components'
import { SelectTrigger } from '../select'
import { ListBox, ListBoxItem, ListBoxPopover } from '../list-box'

interface CalendarPickerItem {
  id: number
  formatted: string
}

export interface CalendarPickerProps {
  'aria-label': string
  value: Key
  onChange: (key: Key | null) => void
  items: CalendarPickerItem[]
  isDisabled?: boolean
  /**
   * A read-only calendar still allows browsing months/years — it only
   * blocks date *selection* — so this only applies a cosmetic treatment,
   * matching the existing prev/next nav buttons' behaviour.
   */
  isReadOnly?: boolean
  'data-testid': string
}

export const CalendarPicker = ({
  'aria-label': ariaLabel,
  value,
  onChange,
  items,
  isDisabled,
  isReadOnly,
  'data-testid': testId,
}: CalendarPickerProps) => (
  <AriaSelect
    aria-label={ariaLabel}
    selectedKey={value}
    onSelectionChange={onChange}
    isDisabled={isDisabled}
    data-readonly={isReadOnly || undefined}
    data-testid={testId}
  >
    <SelectTrigger
      size='small'
      isDisabled={isDisabled}
    />
    <ListBoxPopover>
      <ListBox
        items={items}
        virtualized={false}
        size='small'
      >
        {item => (
          <ListBoxItem
            id={item.id}
            textValue={item.formatted}
          >
            {item.formatted}
          </ListBoxItem>
        )}
      </ListBox>
    </ListBoxPopover>
  </AriaSelect>
)
