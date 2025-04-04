import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from './DateField'
import { CalendarDate } from '@internationalized/date'

const meta: Meta<typeof DateField> = {
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
  },
}
export default meta
type Story = StoryObj<typeof DateField>

/** Don't put format in description, it changes with browser language settings! */
export const Default: Story = {
  args: {
    label: 'Välj ett datum',
    description: 'Vilket som helst',
  },
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    errorMessage: 'Date must be tjugonionde maj',
  },
}
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}

/** When using uncontrolled value */
export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}
