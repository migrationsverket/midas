import { render } from '@testing-library/react'

import Kalender from './Kalender'

describe('Kalender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Kalender />)
    expect(baseElement).toBeTruthy()
  })
})
