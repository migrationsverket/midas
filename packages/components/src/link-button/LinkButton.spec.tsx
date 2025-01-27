import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ButtonProps } from 'react-aria-components'
import { LinkButton } from './'
expect.extend(toHaveNoViolations)

describe('given a default link', () => {
  let rendered: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    rendered = render(<LinkTest onPress={handleChange}></LinkTest>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const LinkTest = (props: ButtonProps) => (
// @ts-ignore
  <LinkButton {...props}>Click</LinkButton>
)
