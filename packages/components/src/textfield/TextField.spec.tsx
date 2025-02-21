import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TextField } from './'
import user from '../../tests/utils/user'

const labelText = 'Label for input'

describe('given a default TextField', () => {
  beforeEach(() => {
    render(
      <TextField
        label={labelText}
        type='text'
      ></TextField>,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(labelText))).toHaveNoViolations()
  })

  it('should be possible to enter text using only the keyboard', async () => {
    const input = screen.getByLabelText(labelText)
    const someText = 'derp'

    // expect the input to be empty
    expect(input).toHaveValue('')

    expect(input).not.toHaveFocus()

    // focus the input
    await user.tab()

    expect(input).toHaveFocus()

    // type some text
    await user.keyboard(someText)

    // expect the input to have the text
    expect(input).toHaveValue(someText)
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

describe('given a TextField with ssn validation', () => {
  const labelText = 'Personnummer'
  const testCases = [
    { value: '19900101-1234', isValid: true },
    { value: '900101-1234', isValid: true },
    { value: '19900101 1234', isValid: true },
    { value: '900101 1234', isValid: true },
    { value: '199001011234', isValid: true },
    { value: '9001011234', isValid: true },
    { value: '19900101+1234', isValid: true },
    { value: '900101+1234', isValid: true },
    { value: '19900101-123', isValid: false },
    { value: '900101-123', isValid: false },
    { value: '19900101 123', isValid: false },
    { value: '900101 123', isValid: false },
    { value: '19900101123', isValid: false },
    { value: '900101123', isValid: false },
    { value: '19900101+123', isValid: false },
    { value: '900101+123', isValid: false },
  ]

  beforeEach(() => {
    render(
      <TextField
        label={labelText}
        type='text'
        validationType='ssn'
        errorMessage='Fel format för ett personnummer'
      />,
    )
  })

  testCases.forEach(({ value, isValid }) => {
    it(`should ${isValid ? 'validate' : 'show error for'} personnummer format: ${value}`, async () => {
      const input = screen.getByLabelText(labelText)

      await user.type(input, value)
      await user.tab() // Move focus away to trigger validation

      expect(input).toHaveValue(value)
      if (isValid) {
        expect(screen.queryByText('Fel format för ett personnummer')).toBeNull()
      } else {
        expect(
          screen.getByText('Fel format för ett personnummer'),
        ).toBeInTheDocument()
      }
    })
  })
})
