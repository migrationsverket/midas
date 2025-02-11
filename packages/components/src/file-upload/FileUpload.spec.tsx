import { FileUpload, FileTriggerProps } from './FileUpload'
import '@testing-library/jest-dom'
import { axe } from 'jest-axe'
import { render, RenderResult } from '@testing-library/react'

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
