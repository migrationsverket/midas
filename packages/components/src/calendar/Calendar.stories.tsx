import type { Meta, StoryObj } from '@storybook/react-vite'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import {
  CalendarDate,
  getLocalTimeZone,
  isWeekend,
  today,
} from '@internationalized/date'
import { RunOptions } from 'axe-core'
import { Calendar } from './Calendar'

type Story = StoryObj<typeof Calendar<'single'>>

export default {
  component: Calendar,
  render: args => {
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null)
    return (
      <Calendar<'single'>
        value={selectedDate}
        onChange={setSelectedDate}
        {...args}
      />
    )
  },
  title: 'Components/Calendar',
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar<'single'>>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [
          {
            // Dont check for color contrast on disabled elements
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      } satisfies RunOptions,
    },
  },
}

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    value: new CalendarDate(1995, 5, 29),
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel',
  },
}

export const UnavailableWeekends: Story = {
  args: {
    isDateUnavailable: date => isWeekend(date, 'sv-SE'),
  },
}

export const MultiSelect: StoryObj<typeof Calendar<'multiple'>> = {
  tags: ['!autodocs', '!snapshot'],
  render: args => {
    const [selectedDates, setSelectedDates] = useState<readonly DateValue[]>(
      [],
    )
    return (
      <div>
        <Calendar<'multiple'>
          {...args}
          selectionMode='multiple'
          value={selectedDates}
          onChange={setSelectedDates}
          defaultFocusedValue={today(getLocalTimeZone())}
        />
        <p>{selectedDates.length} valda datum</p>
      </div>
    )
  },
}
