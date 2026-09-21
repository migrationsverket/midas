import * as React from 'react'
import {
  CalendarMonthPicker as AriaCalendarMonthPicker,
  Select as AriaSelect,
} from 'react-aria-components'
import { SelectTrigger } from '../select'
import { ListBox, ListBoxItem, ListBoxPopover } from '../list-box'

export interface CalendarMonthPickerProps {
  isDisabled?: boolean
  /**
   * A read-only calendar still allows browsing months/years — it only
   * blocks date *selection* — so this only applies a cosmetic treatment,
   * matching the existing prev/next nav buttons' behaviour.
   */
  isReadOnly?: boolean
}

export const CalendarMonthPicker = ({
  isDisabled,
  isReadOnly,
}: CalendarMonthPickerProps) => (
  <AriaCalendarMonthPicker>
    {({ 'aria-label': ariaLabel, value, onChange, items }) => (
      <AriaSelect
        aria-label={ariaLabel}
        selectedKey={value}
        onSelectionChange={onChange}
        isDisabled={isDisabled}
        data-readonly={isReadOnly || undefined}
        data-testid='calendar-month-picker'
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
    )}
  </AriaCalendarMonthPicker>
)
