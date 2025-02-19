import { screen } from '@testing-library/react'
import { renderWithForm } from '../../tests/utils/browser'
import { DatePicker } from './'

const label = 'Välj ett datum'

describe('DatePicker', () => {
  it('should render successfully', () => {
    renderWithForm(<DatePicker label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
