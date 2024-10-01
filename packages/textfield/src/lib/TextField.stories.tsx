import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'
import { Flex, FlexItem } from '@midas-ds/flex'
import { TextArea } from '@midas-ds/textarea'
import { CheckboxGroup, Checkbox } from '@midas-ds/checkbox'
import { DatePicker } from '@midas-ds/date-picker'
import { FileUpload } from '@midas-ds/file-upload'

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'TextField',
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
    errorMessage: 'Errror!',
  },
}

export const Required = {
  args: {
    ...Primary.args,
    isRequired: true,
  },
}

export const Disabled = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
}
