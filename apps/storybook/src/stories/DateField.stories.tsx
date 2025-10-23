import type { Meta, StoryObj } from '@storybook/react-vite'
import { DateField } from '@midas-ds/components'
import { CalendarDate } from '@internationalized/date'

type Story = StoryObj<typeof DateField>

export default {
  component: DateField,
  title: 'Components/DateField',
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
    errorPosition: 'top',
    label: 'Välj ett datum',
    description: 'Vilket som helst',
  },
} as Meta<typeof DateField>

/** Don't put format in description, it changes with browser language settings! */
export const Primary: Story = {}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Date must be tjugonionde maj',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

/** When using uncontrolled value */
export const WithDefaultValue: Story = {
  args: {
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}
