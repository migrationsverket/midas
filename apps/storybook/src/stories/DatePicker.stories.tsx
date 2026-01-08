import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker } from '@midas-ds/components'
import { parseDate, CalendarDate } from '@internationalized/date'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/DatePicker',
  tags: ['autodocs'],
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorPosition: 'top',
    size: 'large',
  },
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
type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {}

export const WithTime: Story = {
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second',
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
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Var god ange ett datum',
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum',
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const CustomValiation: Story = {
  args: {
    isRequired: true,
    validate: ({ year }) =>
      year === new Date().getFullYear() ? 'Var god välj ett annat år' : true,
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const ControlledState: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [value, setValue] = React.useState<CalendarDate | null>(
      parseDate('2026-05-29'),
    )
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={newValue =>
          setValue(newValue ? parseDate(newValue.toString()) : null)
        }
      />
    )
  },
}

/** With clear button enabled */
export const WithClearButton: Story = {
  args: {
    isClearable: true,
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}

/** Clear button is disabled when field is disabled */
export const WithClearButtonDisabled: Story = {
  args: {
    isClearable: true,
    defaultValue: new CalendarDate(1995, 5, 29),
    isDisabled: true,
  },
}

/** Clear button does not appear when field is read-only */
export const WithClearButtonReadOnly: Story = {
  args: {
    isClearable: true,
    defaultValue: new CalendarDate(1995, 5, 29),
    isReadOnly: true,
  },
}
