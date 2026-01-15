import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './DatePicker.stories'
import { render } from 'vitest-browser-react'

const { Required, CustomValiation, ControlledState } = composeStories(stories)

describe('given a required DatePicker', async () => {
  it('should show an error message if submitted empty', async () => {
    const { getByText } = await render(<Required />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText(Required.args.errorMessage as string))
      .toBeInTheDocument()
  })
})

describe('given a DatePicker with Custom Validation', async () => {
  /**
   * This test is made to create an invalid DatePicker
   * the current year is not allowed the "user" selects todays date and submits the form
   */
  it('should show a custom error message if invalid', async () => {
    const { getByText } = await render(<CustomValiation />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()

    await expect
      .element(getByText('Var god välj ett annat år'))
      .toBeInTheDocument()
  })
})

describe('given a Contolled DatePicker', async () => {
  it('the calendar should not be contained by the datepicker div', async () => {
    await render(<ControlledState />)

    // Select tomorrows date
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[ArrowRight]')
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[Enter]')

    await expect.element(page.getByRole('application')).toBeInTheDocument()
  })
})
