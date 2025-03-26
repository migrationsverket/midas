import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, type TextAreaProps } from './TextArea'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import { TextField } from '../textfield'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import styles from './TextArea.module.css'

const testID = 'test'

const fieldErrorTestID = 'error'

const stringOfLength = (length: number) => new Array(length + 1).join('x')

const Template: React.FC<TextAreaProps> = args => (
  <TextField>
    <Label>Label</Label>
    <Text slot='description'>Description</Text>
    <TextArea
      data-testid={testID}
      {...args}
    />
    <FieldError data-testid={fieldErrorTestID} />
  </TextField>
)

const meta: Meta<typeof TextArea> = {
  component: Template,
  title: 'Components/TextArea',
  tags: ['autodocs'],
  args: {
    className: 'test-class',
  },
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  play: async ({ canvas, step, args: { className } }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByTestId(testID)).toHaveClass(
          styles.inputField,
          className as string,
        )
      },
    )
  },
}

export const Invalid = {
  args: {
    isInvalid: true,
    errorMessage: 'Error',
  },
}

// TODO: Test this when we've refactored the validation
// export const Required: Story = {
//   tags: ['!dev'],
//   args: {
//     required: true,
//     errorMessage: 'Var god ange en text',
//   },
//   render: args => (
//     <form>
//       <Template {...args} />
//       <button type='submit'>Submit</button>
//     </form>
//   ),
//   play: async ({ canvas, step, args: { errorMessage } }) => {
//     await step(
//       'it should give a validation error if the user entered no text',
//       async () => {
//         await userEvent.tab()
//         await userEvent.tab()
//         await userEvent.keyboard('[Enter]')
//         expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
//       },
//     )
//   },
// }

// TODO: Test this when we've refactored the validation
// export const CustomValidation: Story = {
//   tags: ['!dev'],
//   args: {
//     label: 'Label',
//     validate: (value: string) =>
//       !/^\d+$/.test(value) ? 'Only numbers are allowed' : true,
//   },
//   render: args => (
//     <form>
//       <TextArea {...args} />
//       <button type='submit'>Submit</button>
//     </form>
//   ),
//   play: async ({ canvas, step }) => {
//     await step(
//       'it should give a validation error if the user entered an unpermitted text',
//       async () => {
//         await userEvent.tab()
//         await userEvent.keyboard('abc')
//         await userEvent.tab()
//         await userEvent.keyboard('[Enter]')
//         expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument()
//       },
//     )
//   },
// }

export const MaxLength: Story = {
  args: {
    ...Primary.args,
    maxLength: 50,
  },
  play: async ({ canvas, step, args }) => {
    const maxLength = args.maxLength as number
    await step(
      'it should not be possible to exceed the maxLength property',
      async () => {
        const randomString = stringOfLength(maxLength + 1)
        await userEvent.tab()
        await userEvent.keyboard(randomString)
        expect(
          canvas.getByTestId<HTMLTextAreaElement>(testID).value.length,
        ).toBe(maxLength)
      },
    )
  },
}

export const MinLength: Story = {
  args: {
    ...Primary.args,
    minLength: 2,
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
