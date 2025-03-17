import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './TextField.module.css'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/TextField',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'Etikett',
    },
    description: {
      type: 'string',
    },
    type: {
      options: ['password', 'text', 'email'],
      control: { type: 'select' },
    },
  },
}
export default meta
type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        // @ts-expect-error dont recognize this property
        const wrapper = canvas.getByTestId(args['data-testid'] as string)
        expect(wrapper).toHaveClass(styles.inputField, args.className as string)
      },
    )
  },
}

export const Password = {
  args: {
    label: 'Enter Password',
    type: 'password',
  },
}

export const NotValid = {
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Fel i valideringen',
  },
}

export const Required: Story = {
  tags: ['!dev'],
  args: {
    ...Primary.args,
    isRequired: true,
    errorMessage: 'Var god fyll i detta fält',
  },
  render: args => (
    <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args: { errorMessage } }) => {
    await step(
      'it should give a validation error if the user entered no text',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
      },
    )
  },
}

export const CustomValidation: Story = {
  tags: ['!dev'],
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
    label: 'Label',
    type: 'number',
  },
  play: async ({ canvas, step, args: { label } }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab()
      await userEvent.keyboard('abc')
      expect(canvas.getByLabelText(label as string)).toHaveValue(null)
    })
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
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

export const Personnummer = {
  args: {
    ...Primary.args,
    validationType: 'ssn',
    label: 'Personnummer',
    description: undefined,
    errorMessage: `Fel format för ett personnummer`,
    maxLength: 12,
  },
}

export const Dossnr: Story = {
  args: {
    ...Primary.args,
    validationType: 'dossnr',
    label: 'Dossiernummer',
    description: undefined,
    errorMessage: `Fel format för ett dossiernummer`,
  },
}

export const MaxLength = {
  args: {
    ...Primary.args,
    maxLength: 50,
  },
}

export const ShowCounter: Story = {
  args: {
    ...Primary.args,
    showCounter: true,
    value: 'HEJ',
  },
  play: async ({ canvas, step, args: { value } }) => {
    await step(
      'it should show the correct count for its initial value',
      async () => {
        expect(canvas.getByText(value?.length as number)).toBeInTheDocument()
      },
    )
  },
}

export const ShowCounterWithDefaultValue: Story = {
  tags: ['!dev'],
  args: {
    ...Primary.args,
    showCounter: true,
    defaultValue: 'HEJ',
  },
  play: async ({ canvas, step, args: { defaultValue } }) => {
    await step(
      'it should show the correct count for its initial value',
      async () => {
        expect(
          canvas.getByText(defaultValue?.length as number),
        ).toBeInTheDocument()
      },
    )
  },
}
