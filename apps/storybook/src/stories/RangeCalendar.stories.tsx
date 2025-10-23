import type { Meta, StoryObj } from '@storybook/react-vite'
import { RangeCalendar } from '@midas-ds/components'
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
