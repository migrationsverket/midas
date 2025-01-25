import { render } from '@testing-library/react'

import { SearchField } from './'

describe('SearchField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchField placeholder="Search" />)
    expect(baseElement).toBeTruthy()
  })
})
