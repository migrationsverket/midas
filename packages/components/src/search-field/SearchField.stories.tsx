import type { Meta, StoryObj } from '@storybook/react'
import { SearchField } from './SearchField'
import { expect, fn, userEvent } from '@storybook/test'
import styles from './SearchField.module.css'

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
    className: 'test-class',
  },
  render: args => {
    return <SearchField {...args} />
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
  play: async ({
    canvas,
    canvasElement,
    step,
    globals: { size },
    args: { onChange, onSubmit, buttonText, className },
  }) => {
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

    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('searchbox')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
      await expect(
        canvas.getByRole('button', { name: buttonText }),
      ).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
    })

    await step('it should accept custom classNames', async () => {
      await expect(canvasElement.querySelector('div')).toHaveClass(
        styles.container,
        className as string,
      )
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
