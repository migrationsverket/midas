import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SearchField } from './'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const placeholder = 'Search'

describe('given a default SearchField', () => {
  beforeEach(() => {
    renderWithForm(<SearchField placeholder={placeholder} />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(placeholder))).toHaveNoViolations()
  })
})

describe('given a required SearchField', () => {
  beforeEach(() => {
    renderWithForm(
      <SearchField
        placeholder={placeholder}
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

describe('given a SearchField with custom validation', () => {
  const errorMessage = 'Dont search for secret documents'

  beforeEach(() =>
    renderWithForm(
      <SearchField
        placeholder={placeholder}
        validate={value => (value === 'secret' ? errorMessage : true)}
      />,
    ),
  )

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await user.tab()
    await user.keyboard('secret')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
