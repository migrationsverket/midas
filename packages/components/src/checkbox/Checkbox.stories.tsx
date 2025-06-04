import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { expect, userEvent } from '@storybook/test'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isInvalid: { type: 'boolean' },
    isSelected: { type: 'boolean' },
    isIndeterminate: { type: 'boolean' },
    isDisabled: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Example: Story = {
  render: ({ ...args }) => {
    return (
      <Checkbox
        value='unsubscribe'
        {...args}
      >
        Unsubscribe
      </Checkbox>
    )
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: ({ ...args }) => {
    return (
      <Checkbox
        value='unsubscribe'
        {...args}
      >
        Unsubscribe
      </Checkbox>
    )
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
    'aria-label': 'test',
  },
  // tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ ...args }) => {
    return (
      <form>
        <Checkbox
          value='unsubscribe'
          {...args}
        >
          Unsubscribe
        </Checkbox>
        <button type='submit'>submit</button>
      </form>
    )
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should be (aria) invalid if the user submitted without checking the box',
      async () => {
        const checkbox = canvas.getByLabelText('Unsubscribe')
        await userEvent.click(checkbox)
        await userEvent.click(checkbox)
        expect(checkbox).toBeInvalid()
      },
    )
  },
}
