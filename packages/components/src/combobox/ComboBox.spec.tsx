import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'
import { ComboBox, ComboBoxItem } from './ComboBox'
import { generateMockOptions } from './utils'
import { Item } from './types'
import { renderWithForm } from '../../tests/utils/browser'

const label = 'basic combobox'
const items = generateMockOptions(30)
const testClass = 'test'
const testID = 'test'

describe('given a default ComboBox', () => {
  beforeEach(() => {
    renderWithForm(
      <ComboBox
        items={items}
        aria-label={label}
        data-testid={testID}
        className={testClass}
      >
        {({ name }: Item) => <ComboBoxItem>{name}</ComboBoxItem>}
      </ComboBox>,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(testID))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    const accordion = screen.getByTestId(testID)
    expect(accordion).toHaveClass('combobox')
    expect(accordion).toHaveClass(testClass)
  })
})

describe('given a required ComboBox', () => {
  beforeEach(() => {
    renderWithForm(
      <ComboBox
        items={items}
        aria-label={label}
        isRequired
      >
        {({ name }: Item) => <ComboBoxItem>{name}</ComboBoxItem>}
      </ComboBox>,
    )
  })

  it('should be (aria) invalid and show a validation error message if the user submitted without selecting anything', async () => {
    const comboBox = screen.getByLabelText(label)
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(comboBox).toBeInvalid()
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a required ComboBox with a custom error message', () => {
  const errorMessage = 'derp'

  beforeEach(() => {
    renderWithForm(
      <ComboBox
        items={items}
        aria-label={label}
        isRequired
        errorMessage={errorMessage}
      >
        {({ name }: Item) => <ComboBoxItem>{name}</ComboBoxItem>}
      </ComboBox>,
    )
  })

  it('should show a custom error message if invalid', async () => {
    const comboBox = screen.getByLabelText(label)
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(comboBox).toBeInvalid()
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
