import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchField } from './SearchField'

type Story = StoryObj<typeof SearchField>

export default {
  component: SearchField,
  title: 'Components/SearchField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    buttonText: 'Sök',
    errorPosition: 'top',
    className: 'test-class',
    size: 'large',
  },
} satisfies Meta<typeof SearchField>

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

export const Disabled: Story = {
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true,
  },
}
