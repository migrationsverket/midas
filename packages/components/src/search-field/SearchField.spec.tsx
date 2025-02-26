import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SearchField } from './'
import user from '../../tests/utils/user'

const placeholder = 'Search'

describe('given a default SearchField', () => {
  const onChange = jest.fn()
  const onSubmit = jest.fn()

  beforeEach(() => {
    render(
      <SearchField
        placeholder={placeholder}
        onChange={onChange}
        onSubmit={onSubmit}
      />,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(placeholder))).toHaveNoViolations()
  })

  it('should be possible to submit a search string using only the keyboard', async () => {
    await user.tab()
    await user.keyboard('hello')
    await user.keyboard('[Enter]')
    expect(onChange).toHaveBeenCalledWith('hello')
    expect(onSubmit).toHaveBeenCalledWith('hello')
  })

  it('should be possible to submit a search string using the mouse', async () => {
    await user.tab()
    await user.keyboard('hello')
    await user.click(screen.getByText('Sök'))
    expect(onChange).toHaveBeenCalledWith('hello')
    expect(onSubmit).toHaveBeenCalledWith('hello')
  })
})

describe('given a required SearchField', () => {
  beforeEach(() => {
    render(
      <SearchField
        placeholder={placeholder}
        isRequired
      />,
    )
  })

  it.failing(
    'should give a validation error if the user entered no text',
    async () => {
      await user.tab()
      await user.keyboard('[Enter]')

      // JSDOM Native required validation message
      expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
    },
  )

  it.failing(
    'should give a validation error if the user entered no text and used the mouse to click "search"',
    async () => {
      await user.click(screen.getByText('Sök'))

      // JSDOM Native required validation message
      expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
    },
  )
})

describe('given a SearchField with custom validation', () => {
  const errorMessage = 'Dont search for secret documents'
  const onChange = jest.fn()
  const onSubmit = jest.fn()

  beforeEach(() =>
    render(
      <SearchField
        placeholder={placeholder}
        validate={value => (value === 'secret' ? errorMessage : true)}
        onChange={onChange}
        onSubmit={onSubmit}
      />,
    ),
  )

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await user.tab()
    await user.keyboard('secret')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(onChange).toHaveBeenCalledWith('secret')
    expect(onSubmit).not.toHaveBeenCalled()
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('should give a validation error if the user entered an unpermitted text and used the mouse to click "search"', async () => {
    await user.tab()
    await user.keyboard('secret')
    await user.click(screen.getByText('Sök'))
    expect(onChange).toHaveBeenCalledWith('secret')
    expect(onSubmit).not.toHaveBeenCalled()
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
