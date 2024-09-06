import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { Button } from './Button'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ButtonProps } from 'react-aria-components'
expect.extend(toHaveNoViolations)

describe('given a default button', () => {
  let rendered: RenderResult
  let handleChange: jest.Mock
  let button: HTMLElement

  beforeEach(() => {
    rendered = render(<ButtonTest onPress={handleChange}></ButtonTest>)
    button = rendered.getByRole('button')
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const ButtonTest = (props: ButtonProps) => <Button {...props}>Click</Button>
