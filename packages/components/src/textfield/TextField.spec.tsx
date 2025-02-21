import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TextField } from './'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const label = 'Label for input'
const testClass = 'test'
const testID = 'test'

describe('given a default TextField', () => {
  beforeEach(() => {
    renderWithForm(
      <TextField
        label={label}
        type='text'
        data-testid={testID}
        className={testClass}
      />,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(screen.getByTestId(testID)).toHaveClass('inputField', testClass)
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

describe('given a TextField with showCounter and an initial value', () => {
  beforeEach(() =>
    renderWithForm(
      <TextField
        label={label}
        showCounter
        value='HEJ'
      />,
    ),
  )

  it('should show the correct count for its initial value', async () => {
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})

describe('given a TextField with showCounter and an initial defaultValue', () => {
  beforeEach(() =>
    renderWithForm(
      <TextField
        label={label}
        showCounter
        defaultValue='HEJ'
      />,
    ),
  )

  it('should show the correct count for its initial value', async () => {
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})

describe('given a TextField with dossnr validation', () => {
  const labelText = 'Dossiernummer'
  const testCases = [
    { value: '1-123456/1', isValid: true },
    { value: '12+123456-1', isValid: true },
    { value: '1-123456', isValid: true },
    { value: '1+123456', isValid: true },
    { value: '123456', isValid: true },
    { value: '12123456', isValid: true },
    { value: '123-123456/1', isValid: false },
    { value: '1-123', isValid: false },
  ]

  beforeEach(() => {
    render(
      <TextField
        label={labelText}
        type='text'
        validationType='dossnr'
        errorMessage='Fel format för ett dossiernummer'
      />,
    )
  })

  testCases.forEach(({ value, isValid }) => {
    it(`should ${isValid ? 'validate' : 'show error for'} dossiernummer format: ${value}`, async () => {
      const input = screen.getByLabelText(labelText)

      await user.type(input, value)
      await user.tab() // Move focus away to trigger validation

      expect(input).toHaveValue(value)
      if (isValid) {
        expect(
          screen.queryByText('Fel format för ett dossiernummer'),
        ).toBeNull()
      } else {
        expect(
          screen.getByText('Fel format för ett dossiernummer'),
        ).toBeInTheDocument()
      }
    })
  })
})
