import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from './DateField'
import {CalendarDate} from '@internationalized/date';

const meta: Meta<typeof DateField> = {
  component: DateField,
  title: 'Components/DateField',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof DateField>

export const Default: Story = {
  args: {
    label: 'Välj datum',
    description: 'YYYY-MM-DD'
  }
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    errorMessage: 'Date must be tjugoniende maj'
  }
}
export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true
  }
}

/** When using uncontrolled value */
export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: new CalendarDate(1999,5,29),
  },
}
