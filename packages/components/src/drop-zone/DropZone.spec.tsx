import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, server, userEvent } from 'vitest/browser'
import * as stories from './DropZone.stories'
import { render } from '../../test-utils'

const { WithFileTrigger, Invalid, RejectsWrongFileType } =
  composeStories(stories)
const handleSelect = vi.fn()

describe('Given a DropZone composed with a FileTrigger', async () => {
  beforeEach(async () => {
    await render(<WithFileTrigger onSelect={handleSelect} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  // TODO: The "webdriverio" provider doesn't support uploading files objects. Provide a file path instead.
  it.skipIf(server.provider === 'webdriverio')(
    'should be possible to upload files using the upload button',
    async () => {
      const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })
      await userEvent.upload(page.getByTestId('file-trigger'), testFile)

      expect(handleSelect).toHaveBeenCalledTimes(1)
      expect(handleSelect).toHaveBeenCalledWith([testFile])
    },
  )

  // Firefox's WebDriver starts the drag, but never drops
  it.skipIf(server.provider === 'webdriverio' && server.browser === 'firefox')(
    'should be possible to upload files using drag and drop',
    async () => {
      await userEvent.dragAndDrop(
        page.getByTestId('image'),
        page.getByTestId('drop-zone'),
      )

      expect(handleSelect).toHaveBeenCalledTimes(1)
    },
  )
})

describe('Given an invalid DropZone', async () => {
  beforeEach(async () => {
    await render(<Invalid />)
  })

  it('should mark itself as invalid for styling', async () => {
    const dropzone = page.getByText('Släpp filer här').element().parentElement
    expect(dropzone).toHaveAttribute('data-invalid')
  })
})

describe('Given a DropZone restricted to .jpg/.png', async () => {
  beforeEach(async () => {
    await render(<RejectsWrongFileType />)
  })

  // TODO: The "webdriverio" provider doesn't support uploading files objects. Provide a file path instead.
  it.skipIf(server.provider === 'webdriverio')(
    'should mark itself invalid and show an error when a disallowed file type is selected',
    async () => {
      const badFile = new File(['hello'], 'hello.txt', { type: 'text/plain' })
      await userEvent.upload(page.getByTestId('file-trigger'), badFile)

      await expect
        .element(page.getByTestId('drop-zone'))
        .toHaveAttribute('data-invalid')
      await expect
        .element(page.getByText('Endast .jpg- och .png-filer tillåts'))
        .toBeInTheDocument()
    },
  )

  // TODO: The "webdriverio" provider doesn't support uploading files objects. Provide a file path instead.
  it.skipIf(server.provider === 'webdriverio')(
    'should clear the invalid state once a valid file type is selected',
    async () => {
      const badFile = new File(['hello'], 'hello.txt', { type: 'text/plain' })
      await userEvent.upload(page.getByTestId('file-trigger'), badFile)
      await expect
        .element(page.getByTestId('drop-zone'))
        .toHaveAttribute('data-invalid')

      const goodFile = new File(['hello'], 'hello.png', { type: 'image/png' })
      await userEvent.upload(page.getByTestId('file-trigger'), goodFile)

      await expect
        .element(page.getByTestId('drop-zone'))
        .not.toHaveAttribute('data-invalid')
    },
  )
})
