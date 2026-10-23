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
 * don't click the trigger. The screenshot is cropped to the story's own
 * element, so it's made tall enough for the calendar. Spread it into a story
 * that sets `tags: ['!dev', '!autodocs']` itself, to hide it from the sidebar
 * and docs: Storybook reads tags statically from the story object, so tags set
 * by a helper are ignored
 */
const open = (story: Story): Story => ({
  ...story,
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
  args: {
    isDateUnavailable: (date, anchorDate) =>
      anchorDate !== null && Math.abs(date.compare(anchorDate)) > 7,
  },
}

export const PrimaryOpen: Story = {
  ...open(Primary),
  tags: ['!dev', '!autodocs'],
}

export const WithClearButtonOpen: Story = {
  ...open(WithClearButton),
  tags: ['!dev', '!autodocs'],
}
