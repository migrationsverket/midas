import { Select as AriaSelect, SelectProps } from 'react-aria-components'
import { SelectTrigger } from '../select'
import { ListBox, ListBoxItem, ListBoxPopover } from '../list-box'

interface CalendarPickerItem {
  id: number
  formatted: string
}

export interface CalendarPickerProps extends SelectProps {
  items: CalendarPickerItem[]
  /**
   * A read-only calendar still allows browsing months/years — it only
   * blocks date *selection* — so this only applies a cosmetic treatment,
   * matching the existing prev/next nav buttons' behaviour.
   */
  isReadOnly?: boolean
}

export const CalendarPicker = ({
  isDisabled,
  isReadOnly,
  items,
  ...rest
}: CalendarPickerProps) => (
  <AriaSelect
    isDisabled={isDisabled}
    data-readonly={isReadOnly || undefined}
    {...rest}
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
