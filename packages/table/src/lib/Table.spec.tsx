import { render } from '@testing-library/react'

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<p>Test kommer inom kort</p>)
    expect(baseElement).toBeTruthy()
  })
})
