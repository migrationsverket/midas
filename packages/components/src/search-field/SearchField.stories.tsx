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
    errorPosition: 'top',
    className: 'test-class',
    size: 'large',
  },
} satisfies Meta<typeof SearchField>

/**
 * Default behavior in v17 — the built-in submit button is shown.
 * The button is not in the tab order; use Enter to submit or click the button.
 */
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

/**
 * Future default in v18 — opt in today with `showButton={false}`.
 * Compose your own `Button` outside `SearchField` for explicit submit.
 * Enter still works for keyboard submission.
 */
export const WithoutButton: Story = {
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false,
  },
}
