import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from './RangeCalendar'
import { expect, userEvent } from '@storybook/test'
import { mockedNow } from '../utils/storybook'
import { RunOptions } from 'axe-core'

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
} as Meta<typeof RangeCalendar>

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
      element: 'body',
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

export const KeyboardTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
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
          canvas.getByRole('gridcell', { name: todaysDate }),
        ).toHaveAttribute('aria-selected', 'true')
        await expect(
          canvas.getByRole('gridcell', { name: tomorrow }),
        ).toHaveAttribute('aria-selected', 'true')
        await expect(
          canvas.getByRole('gridcell', { name: dayAfterTomorrow }),
        ).toHaveAttribute('aria-selected', 'true')
      },
    )
  },
}
