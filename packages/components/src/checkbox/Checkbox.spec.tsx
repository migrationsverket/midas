import { screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const label = 'basic checkbox'

describe('given a default Checkbox', () => {
  beforeEach(() => {
    renderWithForm(<Checkbox aria-label={label} />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a required Checkbox', () => {
  beforeEach(() => {
    renderWithForm(
      <Checkbox
        aria-label={label}
        isRequired
      />,
    )
  })

  it('should be (aria) invalid if the user submitted without checking the box', async () => {
    const checkbox = screen.getByLabelText(label)
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')
    expect(checkbox).toBeInvalid()
  })
})
