import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { expect, userEvent } from '@storybook/test'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/DatePicker',
  tags: ['autodocs'],
  args: {
    label: 'Välj datum',
    description: 'Beskrivning',
    errorPosition: 'top',
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
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args: { errorMessage } }) => {
    await step(
      'it should show an error message if submitted empty',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
      },
    )
  },
}

export const CustomValiation: Story = {
  args: {
    isRequired: true,
    validate: ({ year }) =>
      year === new Date().getFullYear() ? 'Var god välj ett annat år' : true,
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step }) => {
    /**
     * This test is made to create an invalid DatePicker
     * the current year is not allowed the "user" selects todays date and submits the form
     */
    await step('it should show a custom error message if invalid', async () => {
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.keyboard('[Enter]')
      await userEvent.keyboard('[Enter]')
      await userEvent.tab()
      expect(canvas.getByText('Var god välj ett annat år')).toBeInTheDocument()
    })
  },
}
