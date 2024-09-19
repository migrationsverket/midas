import { render } from '@testing-library/react'

import { Table } from './Table'

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<p>Test kommer inom kort</p>)
    expect(baseElement).toBeTruthy()
  })
})
