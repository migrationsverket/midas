import type { Meta, StoryObj } from '@storybook/react-vite'
import { mockedNow } from '@midas-ds/test-utils'
import { RunOptions } from 'axe-core'
import { CalendarDate } from '@internationalized/date'
import { RangeCalendar } from './RangeCalendar'

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
} satisfies Meta<typeof RangeCalendar>

export const Primary: Story = {}

export const SelectedDates: Story = {
  args: {
    defaultValue: {
      start: mockedNow.subtract({ days: 2 }),
      end: mockedNow.add({ days: 2 }),
    },
  },
}

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
    value: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(1995, 5, 31),
    },
  },
}

export const MaxRangeDuration: Story = {
  args: {
    // The second argument (anchorDate) is the first date the user picked.
    // It's null until a selection has started, so dates are only restricted
    // once there's something to measure the 7-day window from.
    isDateUnavailable: (date, anchorDate) =>
      anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7,
  },
}
