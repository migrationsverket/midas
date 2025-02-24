import { screen } from '@testing-library/react'
import { TextArea } from './TextArea'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const label = 'Enter your text here'

describe('given a default TextArea', () => {
  beforeEach(() => renderWithForm(<TextArea label={label} />))

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a TextArea with maxLength and minLength', () => {
  beforeEach(() =>
    renderWithForm(
      <TextArea
        label={label}
        maxLength={4}
        minLength={2}
      />,
    ),
  )

  it('should give a validation error if the given text is too long', async () => {
    await user.tab()
    await user.keyboard('12345')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(
      screen.getByText(
        /Du har angett 1 tecken för mycket. Fältet är begränsat till 4 tecken/,
      ),
    ).toBeInTheDocument()
  })

  it('should give a validation error if the given text is too short', async () => {
    await user.tab()
    await user.keyboard('1')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(
      screen.getByText(
        /Du har angett 1 tecken för lite. Fältet kräver åtminstone 2 tecken/,
      ),
    ).toBeInTheDocument()
  })
})

describe('given a required TextArea', () => {
  beforeEach(() =>
    renderWithForm(
      <TextArea
        label={label}
        isRequired
      />,
    ),
  )

  it('should give a validation error if the user entered no text', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    // JSDOM Native required validation message
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a TextArea with custom validation', () => {
  const errorMessage = 'Only numbers are allowed'

  beforeEach(() =>
    renderWithForm(
      <TextArea
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

describe('given a TextArea with showCounter and an initial value', () => {
  beforeEach(() =>
    renderWithForm(
      <TextArea
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
