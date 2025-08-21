import type { Meta, StoryObj } from '@storybook/react-vite'
import { DateRangePicker } from './DateRangePicker'
import { expect } from 'storybook/test'
import { sizeModes } from '../../.storybook/modes'

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
    chromatic: {
      modes: sizeModes,
    },
  },
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorMessage: 'Felmeddelande',
    errorPosition: 'top',
  },
  render: (args, { globals: { size } }) => {
    return (
      <DateRangePicker
        {...args}
        size={size}
      />
    )
  },
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Primary: Story = {
  play: async ({ step, canvas, globals: { size } }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
    })
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}
