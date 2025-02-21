import { screen } from '@testing-library/react'
import { renderWithForm } from '../../tests/utils/browser'
import { DatePicker } from './'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'
import { mockedNow } from '../../tests/utils/time'

const label = 'Calendar'

describe('given a basic DatePicker', () => {
  beforeEach(() => {
    renderWithForm(<DatePicker label={label} />)
  })

  it('should have no accessibility violations', async () => {
    expect(
      await axe(screen.getByLabelText(label, { selector: 'button' })),
    ).toHaveNoViolations()
  })
})

describe('given a required DatePicker', () => {
  beforeEach(() => {
    renderWithForm(
      <DatePicker
        label={label}
        isRequired
      />,
    )
  })

  it('should show a validation error message if the user submitted without selecting anything', async () => {
    await user.tab()
    await user.tab()
    await user.tab()
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a DatePicker with a custom error message and custom validation rules', () => {
  const errorMessage = 'derp'

  beforeEach(() => {
    renderWithForm(
      <DatePicker
        label={label}
        validate={({ year }) =>
          year === mockedNow.getFullYear() ? errorMessage : true
        }
      />,
    )
  })

  /**
   * This test is made to fail because the current year is not allowed
   * the "user" selects todays date and submits the form
   */
  it('should show the custom error message if the constraints was not satisfied', async () => {
    await user.tab()
    await user.tab()
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    await user.keyboard('[Enter]')
    await user.tab()
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
