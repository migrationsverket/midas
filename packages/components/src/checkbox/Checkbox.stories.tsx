import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Checkbox } from './Checkbox'
import styles from './Checkbox.module.css'

type Story = StoryObj<typeof Checkbox>

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isDisabled: false,
    isIndeterminate: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    value: 'unsubscribe',
    children: 'Unsubscribe',
  },
} satisfies Meta<typeof Checkbox>

export const Example: Story = {}

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

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
}

export const Selected: Story = {
  args: {
    isSelected: true,
  },
}

export const Required: Story = {
  args: {
    isRequired: true,
  },
  tags: ['!dev', '!autodocs'],
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

export const CustomClassName: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    className: 'test-class',
  },
  play: async ({ canvasElement, step, args }) => {
    await step(
      'it should preserve its classnames when given new ones',
      async () => {
        await expect(canvasElement.querySelector('label')).toHaveClass(
          styles.checkbox,
          args.className as string,
        )
      },
    )
  },
}
