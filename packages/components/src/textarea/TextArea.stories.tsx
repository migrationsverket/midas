import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import { TextField } from '../textfield'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import styles from './TextArea.module.css'

const fieldErrorTestID = 'error'
const testClass = 'test-class'

const stringOfLength = (length: number) => new Array(length + 1).join('x')

export default {
  title: 'Components/TextArea',
  component: TextArea,
  render: args => (
    <TextField {...args}>
      <Label>Label</Label>
      <Text slot='description'>Description</Text>
      <TextArea className={testClass} />
      <FieldError data-testid={fieldErrorTestID} />
    </TextField>
  ),
} as Meta<typeof TextField>

type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A `<TextArea>` accepts all HTML attributes and is to be used inside a `<TextField>`.',
      },
    },
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByRole('textbox')).toHaveClass(
          styles.textArea,
          testClass,
        )
      },
    )
  },
}

export const Invalid = {
  args: {
    isInvalid: true,
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
  tags: ['!dev', '!autodocs'],
  args: {
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
          canvas.getByRole<HTMLTextAreaElement>('textbox').value.length,
        ).toBe(maxLength)
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
