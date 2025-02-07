import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { TextField } from './'
import user from '../../tests/utils/user'

const labelText = "Label for input";

describe('given a default TextField', () => {
  beforeEach(() => {
    render(<TextField label={labelText} type='text'></TextField>)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByLabelText(labelText))).toHaveNoViolations()
  })

  it('should be possible to enter text using only the keyboard', async () => {
    const input = screen.getByLabelText(labelText)
    const someText = "derp"

    // expect the input to be empty
    expect(input).toHaveValue('')

    expect(input).not.toHaveFocus();

    // focus the input
    await user.tab();

    expect(input).toHaveFocus();

    // type some text
    await user.keyboard(someText);

    // expect the input to have the text
    expect(input).toHaveValue(someText)
  })
})
