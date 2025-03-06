import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { expect, userEvent, within } from '@storybook/test'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/DatePicker',
  tags: ['autodocs'],
  args: {
    label: 'Välj datum',
    description: 'YYYY-MM-DD',
  },
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Primary: Story = {}

export const WithTime: Story = {
  args: {
    label: 'Välj datum och tid',
    description: 'YYYY-MM-DD HH-MM-SS',
    granularity: 'second',
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    errorMessage: 'Var god ange ett datum',
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvasElement, step, args: { errorMessage } }) => {
    const canvas = within(canvasElement)
    step('it should show an error message if submitted empty', async () => {
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.keyboard('[Enter]')
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
    })
  },
}

export const CustomValiation: Story = {
  args: {
    isRequired: true,
    validate: ({ year }) =>
      year === new Date().getFullYear() ? 'Var god välj ett annat år' : true,
  },
  render: args => (
    <form>
      <DatePicker {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    /**
     * This test is made to create an invalid DatePicker
     * the current year is not allowed the "user" selects todays date and submits the form
     */
    step('it should show a custom error message if invalid', async () => {
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
