import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import { expect, userEvent } from '@storybook/test'
import { today, getLocalTimeZone } from '@internationalized/date'

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

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
