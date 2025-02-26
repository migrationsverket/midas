import { render, screen } from '@testing-library/react'
import { Radio, RadioGroup } from './'
import { axe } from 'jest-axe'
import { renderWithForm } from '../../tests/utils/browser'
import user from '../../tests/utils/user'

const label = 'Välj ett av följande alternativ'
const testClass = 'test'

describe('given a basic Radio group', () => {
  beforeEach(() => {
    render(
      <RadioGroup
        label={label}
        className={testClass}
      />,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(screen.getByLabelText(label)).toHaveClass('radioGroup', testClass)
  })
})

describe('given a required Radio group', () => {
  beforeEach(() => {
    renderWithForm(
      <RadioGroup
        label={label}
        isRequired
      >
        <Radio
          id='derp'
          value='derp'
        >
          Derp
        </Radio>
      </RadioGroup>,
    )
  })

  it('should show a validation error message if the user submitted without selecting anything', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()
  })
})

describe('given a Radio group with a custom error message and custom validation rules', () => {
  const errorMessage = 'Det röda äpplet får du inte välja'

  beforeEach(() => {
    renderWithForm(
      <RadioGroup
        label={label}
        errorMessage={errorMessage}
        validate={value => value === 'greenapple' || errorMessage}
      >
        <Radio
          id='redapple'
          value='redapple'
        >
          Red Apple
        </Radio>
        <Radio
          id='greenapple'
          value='greenapple'
        >
          Green Apple
        </Radio>
      </RadioGroup>,
    )
  })

  it('should show the custom error message if the constraints was not satisfied', async () => {
    await user.tab()
    await user.keyboard('[Enter]')
    await user.tab()
    await user.keyboard('[Enter]')
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
