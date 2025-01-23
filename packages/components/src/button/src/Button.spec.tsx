import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { Button } from 'packages/components/src/button/src/Button'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ButtonProps } from 'react-aria-components'
expect.extend(toHaveNoViolations)

describe('given a default button', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<ButtonTest>Click me!</ButtonTest>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const ButtonTest = (props: ButtonProps) => <Button {...props} />
