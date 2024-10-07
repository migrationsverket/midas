import { render, RenderResult } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TextField, TextFieldProps } from './TextField'
expect.extend(toHaveNoViolations)

describe('given a default TextField', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <TextFieldTest
        label={'Label for input'}
        type={'text'}
      ></TextFieldTest>
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const TextFieldTest = (props: TextFieldProps) => (
  <TextField {...props}></TextField>
)
