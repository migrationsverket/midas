import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'
import { DateValue } from 'react-aria-components'
import { useState } from 'react'
import { expect, userEvent, within } from '@storybook/test'
import { today, getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../utils/storybook'

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

export const DS1141: Story = {
  tags: ['!dev', '!autodocs'],
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
}
