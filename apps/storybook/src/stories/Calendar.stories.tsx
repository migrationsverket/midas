import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from '@midas-ds/components'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { today, getLocalTimeZone, isWeekend } from '@internationalized/date'
import { mockedNow } from '../utils/storybook'
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

export const KeyboardTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should be possible to select tomorrow with the keyboard',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[ArrowRight]')
        await userEvent.keyboard('[Space]')
        await expect(
          canvas.getByRole('gridcell', {
            name: today(getLocalTimeZone()).add({ days: 1 }).day.toString(),
          }),
        ).toHaveAttribute('aria-selected', 'true')
      },
    )
  },
}

export const DS1141: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    minValue: mockedNow,
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should show a "not-allowed" cursor when hovering disabled dates',
      async () => {
        const yesterdayButton = within(
          canvas.getByRole('gridcell', {
            name: `${mockedNow.day - 1}`,
          }),
        ).getByRole('button')

        await userEvent.hover(yesterdayButton)
        await expect(yesterdayButton).toHaveStyle({ cursor: 'not-allowed' })
      },
    )
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
