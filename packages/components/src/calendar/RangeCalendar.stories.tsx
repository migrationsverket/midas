import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from './RangeCalendar'
import MockDate from 'mockdate'
import { parseDate } from '@internationalized/date'
import { expect, userEvent } from '@storybook/test'

const mockedDate = '2025-05-29'
const parsedDate = parseDate(mockedDate)

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
  async beforeEach() {
    MockDate.set(mockedDate)

    return () => {
      MockDate.reset()
    }
  },
} as Meta<typeof RangeCalendar>

export const Primary: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const KeyboardTest: Story = {
  tags: ['!dev', '!autodocs'],
  play: async ({ canvas, step }) => {
    await step(
      'it should be possible to select today and two days ahead with the keyboard',
      async () => {
        const today = parsedDate.day.toString()
        const tomorrow = parsedDate.add({ days: 1 }).day.toString()
        const dayAfterTomorrow = parsedDate.add({ days: 2 }).day.toString()

        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[ArrowRight]')
        await expect(
          canvas.getByRole('gridcell', { name: today }),
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
