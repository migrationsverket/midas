import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import { expect, userEvent } from '@storybook/test'
import MockDate from 'mockdate'
import { parseDate } from '@internationalized/date'

const mockedDate = '2025-05-29'
const parsedDate = parseDate(mockedDate)

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
  async beforeEach() {
    MockDate.set(mockedDate)

    return () => {
      MockDate.reset()
    }
  },
  title: 'Components/Calendar',
  tags: ['autodocs'],
} as Meta<typeof Calendar>

export const Primary: Story = {}

export const KeyboardTest: Story = {
  tags: ['!dev', '!autodocs'],
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
            name: parsedDate.add({ days: 1 }).day.toString(),
          }),
        ).toHaveAttribute('aria-selected', 'true')
      },
    )
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
