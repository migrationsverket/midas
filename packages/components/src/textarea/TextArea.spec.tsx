import { render, screen } from '@testing-library/react'
import { TextArea } from './TextArea'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'

const label = 'Label for input'

describe('given a default TextArea', () => {
  beforeEach(() => {
    render(
      <form>
        <TextArea
          label={label}
          maxCharacters={4}
          minLength={2}
        />
        <button type='submit'>Submit</button>
      </form>,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })

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
  beforeEach(() => {
    render(
      <form>
        <TextArea
          label={label}
          isRequired
        />
        <button type='submit'>Submit</button>
      </form>,
    )
  })

  it('should give a validation error if the user entered no text', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    // Native validation message
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a TextArea with custom validation', () => {
  const errorMessage = 'Only numbers are allowed'

  beforeEach(() => {
    const validate = (value: string) => {
      return !/^\d+$/.test(value) ? errorMessage : undefined
    }
    render(
      <form>
        <TextArea
          label={label}
          isRequired
          validate={validate}
        />
        <button type='submit'>Submit</button>
      </form>,
    )
  })

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await user.tab()
    await user.keyboard('abc')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
