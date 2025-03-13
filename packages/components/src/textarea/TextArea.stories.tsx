import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './TextArea.module.css'

const stringOfLength = (length: number) => new Array(length + 1).join('x')

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Components/TextArea',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'Etikett',
    },
    description: {
      type: 'string',
    },
  },
}
export default meta
type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        // @ts-expect-error dont recognize this property
        expect(canvas.getByTestId(args['data-testid'])).toHaveClass(
          styles.inputField,
          args.className as string,
        )
      },
    )
  },
}

export const Invalid = {
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error',
  },
}

export const Required: Story = {
  tags: ['!dev'],
  args: {
    isRequired: true,
    label: 'Label',
    description: 'Description',
    errorMessage: 'Var god ange en text',
  },
  render: args => (
    <form>
      <TextArea {...args} />
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
      <TextArea {...args} />
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

export const MaxLength: Story = {
  args: {
    ...Primary.args,
    maxLength: 50,
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should give a validation error if the given text is too long',
      async () => {
        const randomString = stringOfLength((args.maxLength as number) + 1)
        await userEvent.tab()
        await userEvent.keyboard(randomString)
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(
          canvas.getByText(/Du har angett 1 tecken för mycket/),
        ).toBeInTheDocument()
      },
    )
  },
}

export const MinLength: Story = {
  args: {
    ...Primary.args,
    minLength: 2,
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should give a validation error if the given text is too short',
      async () => {
        const randomString = stringOfLength((args.minLength as number) - 1)
        await userEvent.tab()
        await userEvent.keyboard(randomString)
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(
          canvas.getByText(/Du har angett 1 tecken för lite/),
        ).toBeInTheDocument()
      },
    )
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

export const Disabled = {
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
