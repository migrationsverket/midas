import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './DatePicker.stories'

const { Required, CustomValiation, ControlledState } = composeStories(stories)

describe('given a required DatePicker', async () => {
  beforeEach(async () => {
    await Required.run()
  })

  it('should show an error message if submitted empty', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(
      page.getByText(Required.args.errorMessage as string),
    ).toBeInTheDocument()
  })
})

describe('given a DatePicker with Custom Validation', async () => {
  beforeEach(async () => {
    await CustomValiation.run()
  })

  /**
   * This test is made to create an invalid DatePicker
   * the current year is not allowed the "user" selects todays date and submits the form
   */
  it('should show a custom error message if invalid', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()
    expect(page.getByText('Var god välj ett annat år')).toBeInTheDocument()
  })
})

describe('given a Contolled DatePicker', async () => {
  beforeEach(async () => {
    await ControlledState.run()
  })

  it('the calendar should not be contained by the datepicker div', async () => {
    // Select tomorrows date
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[ArrowRight]')
    await userEvent.keyboard('[Enter]')
    await userEvent.keyboard('[Enter]')

    expect(page.getByRole('application')).toBeInTheDocument()
  })
})
