import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'
import { ComboBox, ComboBoxItem, ComboBoxProps } from './ComboBox'
import { generateMockOptions } from './utils'
import { Item } from './types'

const label = 'basic checkbox'

const items = generateMockOptions(30)

describe('given a default ComboBox', () => {
  beforeEach(() => {
    render(<TestForm />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a required ComboBox', () => {
  beforeEach(() => {
    render(<TestForm isRequired />)
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
    render(
      <TestForm
        isRequired
        errorMessage={errorMessage}
      />,
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

const TestForm = (props: Partial<ComboBoxProps<Item>>) => (
  <form>
    <ComboBox
      items={items}
      aria-label={label}
      {...props}
    >
      {({ name }: Item) => <ComboBoxItem>{name}</ComboBoxItem>}
    </ComboBox>
    <button type='submit'>Submit</button>
  </form>
)
