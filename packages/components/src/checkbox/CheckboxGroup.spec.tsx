import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './CheckboxGroup.stories'
import { render } from 'vitest-browser-react'

const { Primary, SelectAllInteraction } = composeStories(stories)

const Required = () => (
  <Primary
    {...Primary.args}
    isRequired
    isInvalid={undefined}
    label='Invalid (by required)'
    description='This is a working test'
    validationBehavior='aria'
    errorMessage='Du måste välja en av frukterna'
  />
)

describe('given a required CheckboxGroup', async () => {
  it('should display correct error message when invalid', async () => {
    const { getByText } = await render(<Required />)

    await expect
      .element(getByText('Du måste välja en av frukterna'))
      .toBeVisible()
  })

  it('All checkboxes should be required', async () => {
    const { getByRole } = await render(<Required />)

    getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect.element(checkbox).toBeRequired())
  })

  it('Validation should be satisfied when checking one checkbox', async () => {
    const { getByRole } = await render(<Required />)
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect.element(checkbox).toBeValid())
  })
})

describe('given a Checkbox with select all enabled', async () => {
  it('should show all selected as checked when all options are checked', async () => {
    const { getByRole } = await render(<SelectAllInteraction />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(
      (getByRole('checkbox').first().element() as HTMLInputElement).checked,
    ).toBe(true)
  })

  it('should show select all as indeterminate when 0 > check < max is selected', async () => {
    const { getByRole } = await render(<SelectAllInteraction />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(
      (getByRole('checkbox').first().element() as HTMLInputElement)
        .indeterminate,
    ).toBe(true)
  })
})
