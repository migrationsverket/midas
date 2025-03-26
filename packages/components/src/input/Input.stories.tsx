import type { Meta, StoryObj } from '@storybook/react'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './Input.module.css'
import { TextField, TextFieldProps } from '../textfield'
import { Label } from '../label'
import { Text } from '../text'
import { Input } from './Input'
import { FieldError } from '../field-error'
import React from 'react'

const wrapperTestID = 'wrapper'
const inputTestID = 'input'
const fieldErrorTestID = 'error'
const testClass = 'test-class'

const Template: React.FC<TextFieldProps> = args => (
  <TextField
    {...args}
    data-testid={wrapperTestID}
  >
    <Label>Label</Label>
    <Text slot='description'>Description</Text>
    <Input
      data-testid={inputTestID}
      className={testClass}
    />
    <FieldError data-testid={fieldErrorTestID} />
  </TextField>
)

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    type: {
      options: ['password', 'text', 'email'],
      control: { type: 'select' },
    },
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
        expect(canvas.getByTestId(inputTestID)).toHaveClass(
          styles.inputField,
          testClass,
        )
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

export const NotValid: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByTestId(inputTestID)).toBeInvalid()
      },
    )
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    ...Primary.args,
    isRequired: true,
  },
  render: args => (
    <form>
      <Template {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should give a validation error if the user entered no text',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByTestId(fieldErrorTestID)).toBeInTheDocument()
      },
    )
  },
}

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
//       <TextField {...args} />
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

export const Number: Story = {
  args: {
    type: 'number',
  },
  play: async ({ canvas, step }) => {
    await step('it should not allow any non number input', async () => {
      await userEvent.tab()
      await userEvent.keyboard('abc')
      expect(canvas.getByTestId(inputTestID)).toHaveValue(null)
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

// TODO: Test this when we've refactored the RegExp
// export const Personnummer = {
//   args: {
//     ...Primary.args,
//     validationType: 'ssn',
//     label: 'Personnummer',
//     description: undefined,
//     errorMessage: `Fel format för ett personnummer`,
//     maxLength: 12,
//   },
// }

// TODO: Test this when we've refactored the RegExp
// export const Dossnr: Story = {
//   args: {
//     ...Primary.args,
//     validationType: 'dossnr',
//     label: 'Dossiernummer',
//     description: undefined,
//     errorMessage: `Fel format för ett dossiernummer`,
//   },
// }

export const MaxLength = {
  args: {
    ...Primary.args,
    maxLength: 50,
  },
}
