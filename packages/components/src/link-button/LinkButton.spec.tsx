import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { axe } from 'jest-axe'
import { LinkButton } from './'

describe('given a default link', () => {
  let rendered: RenderResult
  const handleChange = jest.fn()

  beforeEach(() => {
    rendered = render(<LinkButton onPress={handleChange}>Click</LinkButton>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})
