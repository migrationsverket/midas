import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'Components/SearchField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof SearchField>

export const Primary: Story = {
  args: {
    placeholder: 'Sök efter en person',
  },
}

export const CustomValidation: Story = {
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) =>
      value === 'secret' ? 'Sök inte efter hemligheter' : true,
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen',
  },
}
