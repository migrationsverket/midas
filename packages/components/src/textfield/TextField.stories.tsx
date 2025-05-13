import type { Meta, StoryObj } from '@storybook/react'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import { TextField } from '../textfield'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    type: {
      options: ['password', 'text', 'email'],
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Label',
    description: 'Description',
    errorPosition: 'top',
  },
} as Meta<typeof TextField>

type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByRole('textbox').classList.length).toBe(2)
      },
    )
  },
}

export const Password: Story = {
  args: {
    type: 'password',
  },
  play: async ({ canvas, step }) => {
    const password = 'secret'
    await step(
      'it should toggle the password when clicking "Show" and "Hide"',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('secret')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText(password)).toBeInTheDocument()
        await userEvent.keyboard('[Enter]')
        expect(canvas.queryByText(password)).toBeNull()
      },
    )
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel',
  },
  play: async ({ canvas, step, args }) => {
    await step('it should be invalid', async () => {
      expect(canvas.getByLabelText(args.label as string)).toBeInvalid()
    })
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    isRequired: true,
  },
  render: args => (
    <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args }) => {
    await step(
      'it should give a validation error if the user entered no text',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByLabelText(args.label as string)).toBeInvalid()
      },
    )
  },
}

export const CustomValidation: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    label: 'Label',
    validate: (value: string) =>
      !/^\d+$/.test(value) ? 'Only numbers are allowed' : true,
  },
  render: args => (
    <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should give a validation error if the user entered an unpermitted text',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('abc')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument()
      },
    )
  },
}

export const Number: Story = {
  args: {
    type: 'number',
  },
  play: async ({ canvas, step, args }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab()
      await userEvent.keyboard('abc')
      expect(canvas.getByLabelText(args.label as string)).toHaveValue(null)
    })
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [
          {
            // Dont check for color contrast on disabled elements
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      } satisfies RunOptions,
    },
  },
}

export const ShowCounter: Story = {
  args: {
    value: 'I love apples',
    showCounter: true,
  },
  play: async ({ canvas, step, args: { value } }) => {
    await step(
      'it should show the correct count for its initial value',
      async () => {
        expect(canvas.getByText((value as string).length)).toBeInTheDocument()
      },
    )
  },
}

export const MaxLengthAndShowCounter: Story = {
  args: {
    showCounter: true,
    maxLength: 50,
  },
}

export const ShowCounterWithDefaultValue: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'HEJ',
    showCounter: true,
  },
  play: async ({ canvas, step, args: { defaultValue } }) => {
    await step(
      'it should show the correct count for its initial defaultValue',
      async () => {
        expect(
          canvas.getByText((defaultValue as string).length),
        ).toBeInTheDocument()
      },
    )
  },
}

export const MediumSizeInput: Story = {
  tags: ['!autodocs'],
  args: {
    defaultValue: 'Medium size input',
    size: 'medium',
    label: 'Medium size textfield',
  },
  play: async ({ canvas, step, args: { label } }) => {
    await step(
      'it should have an input field with the height of 40px',
      async () => {
        await expect(canvas.getByLabelText(label as string)).toHaveStyle({
          height: '40px',
        })
      },
    )
  },
}
