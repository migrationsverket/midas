import { render } from '@testing-library/react'


describe('Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<p>Test kommer inom kort</p>)
    expect(baseElement).toBeTruthy()
  })
})