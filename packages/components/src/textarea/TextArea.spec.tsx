import { render, screen } from '@testing-library/react'
import { TextArea, TextAreaProps } from './TextArea'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'

const label = 'Enter your text here'

const TestForm = (props: TextAreaProps) => (
  <form>
    <TextArea
      {...props}
      label={label}
    />
    <button type='submit'>Submit</button>
  </form>
)

describe('given a default TextArea', () => {
  beforeEach(() => render(<TestForm />))

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a TextArea with maxCharacters and minLength', () => {
  beforeEach(() =>
    render(
      <TestForm
        maxCharacters={4}
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
  beforeEach(() => render(<TestForm isRequired />))

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
    render(
      <TestForm
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
