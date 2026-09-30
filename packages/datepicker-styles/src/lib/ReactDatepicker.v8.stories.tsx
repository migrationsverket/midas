/**
 * Mirrors ReactDatepicker.stories.tsx, but against react-datepicker v8
 * (aliased as `react-datepicker-v8` in the root package.json) instead of the
 * v9 installed at the root. Exists to prove the styles still work against
 * v8 (datepicker-styles' peerDependencies span `^8.0.0 || ^9.0.0`), not to
 * be a second user-facing demo.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'
import DatePickerV8 from 'react-datepicker-v8'
import type DatePicker from 'react-datepicker'
import { BasicDatePicker, MonthPicker } from './ReactDatepicker'

// v8 and v9 share the same props for everything the fixtures use; the cast
// only bridges the two packages' separate type declarations.
const datePicker = DatePickerV8 as unknown as typeof DatePicker

export default {
  title: 'datepicker-styles/ReactDatepicker/v8',
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
    open: true,
    datePicker,
  },
  argTypes: {
    datePicker: { table: { disable: true } },
  },
  decorators: [
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
