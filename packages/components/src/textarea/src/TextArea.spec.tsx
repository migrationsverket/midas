import { render, RenderResult } from '@testing-library/react'
import { TextArea, TextFieldProps } from 'packages/components/src/textarea/src/TextArea'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('given a default TextField', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<TextAreaTest label={'Label for input'}></TextAreaTest>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const TextAreaTest = (props: TextFieldProps) => <TextArea {...props}></TextArea>
