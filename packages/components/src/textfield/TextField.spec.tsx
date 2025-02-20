import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TextField } from './'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const label = 'Label for input'

describe('given a default TextField', () => {
  beforeEach(() => {
    renderWithForm(
      <TextField
        label={label}
        type='text'
      />,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a required TextField', () => {
  beforeEach(() => {
    renderWithForm(
      <TextField
        label={label}
        type='text'
        isRequired
      />,
    )
  })

  it('should give a validation error if the user entered no text', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    // JSDOM Native required validation message
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a TextField with custom validation', () => {
  const errorMessage = 'Only numbers are allowed'

  beforeEach(() =>
    renderWithForm(
      <TextField
        label={label}
        validate={(value: string) =>
          !/^\d+$/.test(value) ? errorMessage : true
        }
      />,
    ),
  )

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await user.tab()
    await user.keyboard('abc')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})

describe('given a TextField with type "number"', () => {
  beforeEach(() =>
    renderWithForm(
      <TextField
        label={label}
        type='number'
      />,
    ),
  )

  it('should not allow any non number input', async () => {
    await user.tab()
    await user.keyboard('abc')
    expect(screen.getByLabelText(label)).toHaveValue(null)
  })
})
