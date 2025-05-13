import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'
import { expect, fn, userEvent } from '@storybook/test'

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: 'Components/SearchField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    buttonText: 'Sök',
    errorPosition: 'top',
  },
}
export default meta
type Story = StoryObj<typeof SearchField>

export const Primary: Story = {
  args: {
    placeholder: 'Sök efter en person',
    onChange: fn(),
    onSubmit: fn(),
  },
  play: async ({ canvas, step, args: { onChange, onSubmit, buttonText } }) => {
    await step(
      'it should be possible to submit a search string using only the keyboard',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('hello')
        await userEvent.keyboard('[Enter]')
        expect(onChange).toHaveBeenCalledWith('hello')
        expect(onSubmit).toHaveBeenCalledWith('hello')
      },
    )

    await step(
      'it should be possible to submit a search string using the mouse',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('hello')
        await userEvent.click(canvas.getByText(buttonText as string))
        expect(onChange).toHaveBeenCalledWith('hello')
        expect(onSubmit).toHaveBeenCalledWith('hello')
      },
    )

    await step('it should be large per default', async () => {
      await expect(canvas.getByRole('searchbox')).toHaveStyle({
        height: '48px',
      })
      await expect(
        canvas.getByRole('button', { name: buttonText }),
      ).toHaveStyle({
        height: '48px',
      })
    })
  },
}

export const MediumSize: Story = {
  args: {
    placeholder: 'Sök efter en person',
    size: 'medium',
  },
  play: async ({ canvas, step }) => {
    await step('it should be medium sized', async () => {
      await expect(canvas.getByRole('searchbox')).toHaveStyle({
        height: '40px',
      })
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: '40px',
      })
    })
  },
}

export const CustomValidation: Story = {
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) =>
      value === 'secret' ? 'Sök inte efter hemligheter' : true,
    onChange: fn(),
    onSubmit: fn(),
  },
  play: async ({ canvas, step, args: { onChange, onSubmit } }) => {
    await step(
      'it should give a validation error if the user entered an unpermitted text',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('secret')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(onChange).toHaveBeenCalledWith('secret')
        expect(onSubmit).not.toHaveBeenCalled()
        expect(
          canvas.getByText('Sök inte efter hemligheter'),
        ).toBeInTheDocument()
      },
    )
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen',
  },
  play: async ({ canvas, step, args: { placeholder, errorMessage } }) => {
    await step('it should be invalid and show the custom message', async () => {
      expect(canvas.getByLabelText(placeholder as string)).toBeInvalid()
      expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
    })
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true,
  },
}
