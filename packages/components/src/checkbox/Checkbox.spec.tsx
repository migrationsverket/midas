import { render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from 'react-aria-components'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'

const label = 'basic checkbox'

describe('given a default Checkbox', () => {
  beforeEach(() => {
    render(<TestForm />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a required Checkbox', () => {
  beforeEach(() => {
    render(<TestForm isRequired />)
  })

  it('should be (aria) invalid if the user submitted without checking the box', async () => {
    const checkbox = screen.getByLabelText(label)
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(checkbox).toBeInvalid()
  })
})

const TestForm = (props: CheckboxProps) => (
  <form>
    <Checkbox
      aria-label={label}
      {...props}
    >
      Click
    </Checkbox>
    <button type='submit'>Submit</button>
  </form>
)
