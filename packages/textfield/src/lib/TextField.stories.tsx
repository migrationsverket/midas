import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

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

export const Personnummer = {
  args: {
    ...Primary.args,
    isSSN: true,
    label: 'Personnummer',
    description: undefined,
    errorMessage: `Fel format för ett personnummer`,
  },
}
