import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from './DatePicker'

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
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Primary: Story = {
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorMessage: 'Felmeddelande',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    isDisabled: true,
  },
}
