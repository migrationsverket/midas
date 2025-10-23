import type { Meta, StoryObj } from '@storybook/react-vite'
import { DateRangePicker } from '@midas-ds/components'
import { expect } from 'storybook/test'
import { CalendarDate } from '@internationalized/date'

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: 'Components/DatePicker/DateRangePicker',
  tags: ['autodocs'],
  parameters: {
    // UX team rules that placeholder contrast shouldn't be checked
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: '[data-placeholder="true"]',
            enabled: false,
          },
        ],
      },
      options: {
        rules: { 'color-contrast': { enabled: false } },
      },
    },
  },
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorMessage: 'Felmeddelande',
    errorPosition: 'top',
  },
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Primary: Story = {
  play: async ({ step, canvas, globals: { size } }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
    })
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29),
    },
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}
