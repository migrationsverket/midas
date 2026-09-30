import type { Meta, StoryObj } from '@storybook/react-vite'
import { BasicDatePicker, MonthPicker } from './ReactDatepicker'

export default {
  title: 'datepicker-styles/ReactDatepicker',
  component: BasicDatePicker,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Days from the adjacent months use --midas-text-disabled, same
            // as Midas' own Calendar. Unlike React Aria's, react-datepicker
            // keeps them interactive, so axe checks their contrast — skip
            // just those cells and keep the rule for everything else.
            id: 'color-contrast',
            selector: '*:not(.react-datepicker__day--outside-month)',
          },
        ],
      },
    },
  },
  args: {
    // Open by default so the snapshot covers the calendar, not just the
    // input. Toggle it off to get the click-to-open behaviour from the docs.
    open: true,
  },
  argTypes: {
    datePicker: { table: { disable: true } },
  },
  decorators: [
    // The calendar popper is absolutely positioned below the input; reserve
    // room for it so it stays inside the story's (and screenshot's) bounds.
    Story => (
      <div style={{ minHeight: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BasicDatePicker>

type Story = StoryObj<typeof BasicDatePicker>

export const Default: Story = {}

export const MonthSelect: Story = {
  render: args => <MonthPicker {...args} />,
}
