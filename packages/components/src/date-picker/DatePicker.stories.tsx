import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { parseDate, CalendarDate } from '@internationalized/date'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker<CalendarDate>> = {
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
type Story = StoryObj<typeof DatePicker<CalendarDate>>

/**
 * Snapshot-only copy of a story with the calendar open, since the visual tests
 * don't click the trigger. Hidden from the sidebar and docs. The screenshot is
 * cropped to the story's own element, so it's made tall enough for the
 * calendar
 */
const open = (story: Story): Story => ({
  ...story,
  tags: ['!dev', '!autodocs'],
  args: { ...story.args, defaultOpen: true },
  parameters: {
    // The open popover is an unnamed dialog (aria-dialog-name), and the
    // calendar's <header> inside it is a nested banner landmark
    // (landmark-banner-is-top-level)
    a11y: { test: 'todo' },
  },
  decorators: [
    Story => (
      <div style={{ minHeight: '32rem' }}>
        <Story />
      </div>
    ),
  ],
})

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

export const DisabledWithDefaultValue: Story = {
  args: {
    ...Disabled.args,
    defaultValue: new CalendarDate(1995, 5, 29),
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
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const ControlledState: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => {
    const [value, setValue] = React.useState<CalendarDate | null>(
      parseDate('2026-05-29'),
    )

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    )
  },
}

export const WithClearButton: Story = {
  args: {
    isClearable: true,
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}

export const WithHelpPopover: Story = {
  args: {
    popover: {
      children:
        'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information',
    },
  },
}

export const PrimaryOpen = open(Primary)

export const WithTimeOpen = open(WithTime)

export const WithClearButtonOpen = open(WithClearButton)
