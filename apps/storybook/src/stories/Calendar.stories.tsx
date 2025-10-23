import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@midas-ds/components'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import { isWeekend } from '@internationalized/date'
import { RunOptions } from 'axe-core'

type Story = StoryObj<typeof Calendar>

export default {
  component: Calendar,
  render: args => {
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null)
    return (
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        {...args}
      />
    )
  },
  title: 'Components/Calendar',
  tags: ['autodocs'],
} as Meta<typeof Calendar>

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
