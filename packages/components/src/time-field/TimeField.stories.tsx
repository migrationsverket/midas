import type { Meta, StoryObj } from '@storybook/react-vite'
import { Time } from '@internationalized/date'
import { TimeField } from './TimeField'

type Story = StoryObj<typeof TimeField>

export default {
  component: TimeField,
  title: 'Components/TimeField',
  tags: ['autodocs'],
  parameters: {
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
    },
  },
  args: {
    errorPosition: 'top',
    label: 'Välj en tid',
    description: 'Timmar och minuter',
  },
} satisfies Meta<typeof TimeField>

export const Primary: Story = {}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Ogiltig tid',
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
    defaultValue: new Time(14, 30),
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Time(14, 30),
  },
}

export const WithClearButton: Story = {
  args: {
    isClearable: true,
    defaultValue: new Time(14, 30),
  },
}

export const WithSeconds: Story = {
  args: {
    granularity: 'second',
    defaultValue: new Time(14, 30, 45),
  },
}

export const HourCycle12: Story = {
  args: {
    hourCycle: 12,
    defaultValue: new Time(14, 30),
  },
}
