import type { Meta, StoryObj } from '@storybook/react-vite'
import { RunOptions } from 'axe-core'
import { expect, fn, userEvent } from 'storybook/test'
import { TextField } from '@midas-ds/components'

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
    size: 'large',
  },
} satisfies Meta<typeof TextField>

type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByRole('textbox').classList.length).toBe(2)
      },
    )
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByLabelText(args.label as string)).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px',
      })
    })
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: 'Label',
    validate: (value: string) =>
      !/^\d+$/.test(value) ? 'Only numbers are allowed' : true,
  },
  render: args => (
    <form>
      <TextField
        {...args}
        className={({ isInvalid }) => (isInvalid ? 'invalid' : 'valid')}
      />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should give a validation error if the user entered an unpermitted text',
      async () => {
        await expect(canvas.getByRole('textbox')).toHaveClass('valid')
        await userEvent.tab()
        await userEvent.keyboard('abc')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument()
        await expect(canvas.getByRole('textbox')).toHaveClass('invalid')
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
      context: 'body',
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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

export const DS1243: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <div
      style={{ height: 500 }}
      data-testid='wrapper'
    >
      <TextField
        {...args}
        label={undefined}
        description={undefined}
        aria-label='test'
      />
      <div style={{ height: 100 }}>Dummy content</div>
    </div>
  ),
  play: async ({ step, canvas }) => {
    await step(
      'it should not require more height than neccessary',
      async () => {
        const textField = canvas.getByTestId('wrapper')
          .childNodes[0] as HTMLElement
        const input = canvas.getByRole('textbox')

        const { height: textFieldHeight } = textField.getBoundingClientRect()
        const { height: inputHeight } = input.getBoundingClientRect()

        await expect(textFieldHeight).toEqual(inputHeight)
      },
    )
  },
}

export const WithHelpPopover: Story = {
  args: {
    ...Primary.args,
    popover: {
      children:
        'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information',
    },
  },
}

export const DS1326: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    onBlur: fn(),
    onFocus: fn(),
  },
  play: async ({ args, step }) => {
    await step('focus textfield', async () => {
      await userEvent.tab()
    })

    await step('it should call onFocus once', async () => {
      await expect(args.onFocus).toHaveBeenCalledOnce()
    })

    await step('blur textfield', async () => {
      await userEvent.tab()
    })

    await step('it should call onBlur once', async () => {
      await expect(args.onBlur).toHaveBeenCalledOnce()
    })
  },
}
