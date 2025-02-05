import { render, RenderResult } from '@testing-library/react'
import { TextArea } from './TextArea'
import { AriaTextFieldProps as TextFieldProps } from 'react-aria'
import { axe } from 'jest-axe'

describe('given a default TextField', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<TextAreaTest label={'Label for input'}></TextAreaTest>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

// @ts-ignore
const TextAreaTest = (props: TextFieldProps) => <TextArea {...props}></TextArea>
