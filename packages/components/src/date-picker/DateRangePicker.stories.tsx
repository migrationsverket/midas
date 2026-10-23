import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDate } from '@internationalized/date'
import { DateRangePicker } from './DateRangePicker'

type Story = StoryObj<typeof DateRangePicker>

export default {
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
} satisfies Meta<typeof DateRangePicker>

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

export const WithClearButton: Story = {
  args: {
    isClearable: true,
    defaultValue: {
      start: new CalendarDate(1995, 5, 29),
      end: new CalendarDate(2025, 5, 29),
    },
  },
}

export const MaxRangeDuration: Story = {
  // Same screenshot as Primary
  tags: ['!snapshot'],
  args: {
    isDateUnavailable: (date, anchorDate) =>
      anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7,
  },
}

export const PrimaryOpen = open(Primary)

export const WithClearButtonOpen = open(WithClearButton)
