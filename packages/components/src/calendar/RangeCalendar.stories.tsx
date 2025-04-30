import type { Meta, StoryObj } from '@storybook/react'
import { RangeCalendar } from './RangeCalendar'
import { expect, userEvent } from '@storybook/test'
import { now } from '../utils/storybook'

type Story = StoryObj<typeof RangeCalendar>

export default {
  component: RangeCalendar,
  title: 'Components/Calendar/RangeCalendar',
  tags: ['autodocs'],
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
        const todaysDate = now.day.toString()
        const tomorrow = now.add({ days: 1 }).day.toString()
        const dayAfterTomorrow = now.add({ days: 2 }).day.toString()

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
