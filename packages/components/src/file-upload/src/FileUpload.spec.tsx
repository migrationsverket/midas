import { FileUpload, FileTriggerProps } from 'packages/components/src/file-upload/src/FileUpload'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import { render, RenderResult } from '@testing-library/react'
expect.extend(toHaveNoViolations)

describe('given default fileupload', () => {
  let rendered: RenderResult
  beforeEach(() => {
    rendered = render(<FileUploadExample label={'Etikett'} />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const FileUploadExample = (props: FileTriggerProps) => <FileUpload {...props} />
