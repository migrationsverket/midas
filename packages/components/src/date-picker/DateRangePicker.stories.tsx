import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from './DateRangePicker'
import { expect } from '@storybook/test'

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
  },
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorMessage: 'Felmeddelande',
    errorPosition: 'top',
  },
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Primary: Story = {
  play: async ({ step, canvas }) => {
    await step('it should be large per default', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: '48px',
      })
    })
  },
}

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
  play: async ({ step, canvas }) => {
    await step('it should be medium sized', async () => {
      await expect(canvas.getByRole('group')).toHaveStyle({
        height: '40px',
      })
    })
  },
}

export const MediumSizeInvalid: Story = {
  args: {
    size: 'medium',
    isInvalid: true,
  },
}

export const MediumSizeDisabled: Story = {
  args: {
    size: 'medium',
    isDisabled: true,
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
