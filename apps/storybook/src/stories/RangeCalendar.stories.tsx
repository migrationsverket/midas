import type { Meta, StoryObj } from '@storybook/react-vite'
import { RangeCalendar } from '@midas-ds/components'
import { expect, userEvent } from 'storybook/test'
import { mockedNow } from '../utils/storybook'
import { RunOptions } from 'axe-core'
import { CalendarDate } from '@internationalized/date'

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
} as Meta<typeof RangeCalendar>

export const Primary: Story = {}

export const SelectedDates: Story = {
  parameters: {
    // violations in forced-colors
    a11y: { test: 'todo' },
  },
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

export const KeyboardTest: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
    // violations in forced-colors
    a11y: { test: 'todo' },
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should be possible to select today and two days ahead with the keyboard',
      async () => {
        const todaysDate = mockedNow.day.toString()
        const tomorrow = mockedNow.add({ days: 1 }).day.toString()
        const dayAfterTomorrow = mockedNow.add({ days: 2 }).day.toString()

        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[ArrowRight]')
        await expect(
          canvas.getByRole('gridcell', { name: todaysDate, selected: true }),
        ).toHaveAttribute('aria-selected', 'true')
        await expect(
          canvas.getByRole('gridcell', { name: tomorrow, selected: true }),
        ).toHaveAttribute('aria-selected', 'true')
        await expect(
          canvas.getByRole('gridcell', {
            name: dayAfterTomorrow,
            selected: true,
          }),
        ).toHaveAttribute('aria-selected', 'true')
      },
    )
  },
}
