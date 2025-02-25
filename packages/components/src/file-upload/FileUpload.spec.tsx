import { FileUpload } from './FileUpload'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import user from '../../tests/utils/user'

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

describe('given a FileUpload with a custom select handler', () => {
  const onSelect = jest.fn()

  beforeEach(() => {
    render(
      <FileUpload
        label={label}
        data-testid={label}
        onSelect={onSelect}
      />,
    )
  })

  it('should use the provided onSelect callback', async () => {
    const testFile = new File(['derp'], 'derp.png', { type: 'image/png' })
    const fileUpload: HTMLInputElement = screen.getByTestId(label)
    await user.upload(fileUpload, testFile)
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(fileUpload?.files?.[0]).toStrictEqual(testFile)
    expect(fileUpload?.files?.item(0)).toStrictEqual(testFile)
    expect(fileUpload.files).toHaveLength(1)
  })
})
