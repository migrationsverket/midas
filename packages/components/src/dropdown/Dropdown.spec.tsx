import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Dropdown } from './'

describe('Dropdown', () => {
  const { baseElement } = render(<Dropdown />)

  it('should render successfully', () => {
    expect(baseElement).toBeTruthy()
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(baseElement)).toHaveNoViolations()
  })
})
