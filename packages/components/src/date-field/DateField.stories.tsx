import type { Meta, StoryObj } from '@storybook/react'
import { DateField } from './DateField'
import { MidasThemeProvider } from '../theme'
import { CalendarDate } from '@internationalized/date'
import { expect } from '@storybook/test'

type Story = StoryObj<typeof DateField>

export default {
  component: DateField,
  title: 'Components/DateField',
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
    errorPosition: 'top',
    label: 'Välj ett datum',
    description: 'Vilket som helst',
  },
} as Meta<typeof DateField>

/** Don't put format in description, it changes with browser language settings! */
export const Default: Story = {
  play: async ({ step, canvas }) => {
    await step('it should be large per default', async () => {
      await expect(canvas.getByTestId('date-field_input-field')).toHaveStyle({
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
      await expect(canvas.getByTestId('date-field_input-field')).toHaveStyle({
        height: '40px',
      })
    })
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Date must be tjugonionde maj',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

/** When using uncontrolled value */
export const WithDefaultValue: Story = {
  args: {
    defaultValue: new CalendarDate(1995, 5, 29),
  },
}

export const ThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  render: args => (
    <MidasThemeProvider value={{ size: 'medium' }}>
      <DateField {...args} />
    </MidasThemeProvider>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should be medium size, as defined by the context',
      async () => {
        await expect(canvas.getByTestId('date-field_input-field')).toHaveStyle({
          height: '40px',
        })
      },
    )
  },
}

export const OverrideThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    size: 'large',
  },
  render: ThemeProvider.render,
  play: async ({ canvas, step }) => {
    await step(
      'it should be large and override the context, as defined by the component',
      async () => {
        await expect(canvas.getByTestId('date-field_input-field')).toHaveStyle({
          height: '48px',
        })
      },
    )
  },
}
