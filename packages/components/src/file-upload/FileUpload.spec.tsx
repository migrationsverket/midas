import { FileUpload } from './FileUpload'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

const label = 'Etikett'

describe('given default FileUpload', () => {
  beforeEach(() => {
    render(
      <FileUpload
        label={label}
        data-testid={label}
      />,
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(label))).toHaveNoViolations()
  })
})
