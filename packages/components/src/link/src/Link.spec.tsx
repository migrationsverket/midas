import { render } from '@testing-library/react'

import { Link } from 'packages/components/src/link/src/Link'

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link />)
    expect(baseElement).toBeTruthy()
  })
})
