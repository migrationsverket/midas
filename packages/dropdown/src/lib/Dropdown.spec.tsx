import { render } from '@testing-library/react'

import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dropdown />)
    expect(baseElement).toBeTruthy()
  })
})
