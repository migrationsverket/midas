import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from 'react-aria-components'
import { axe } from 'jest-axe'

describe('given a default Checkbox', () => {
  // setup
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<CheckboxTest></CheckboxTest>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const CheckboxTest = (props: CheckboxProps) => (
  <Checkbox
    aria-label={'basic checkbox'}
    {...props}
  >
    Click
  </Checkbox>
)
