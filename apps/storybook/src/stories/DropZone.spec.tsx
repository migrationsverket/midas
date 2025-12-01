import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './DropZone.stories'
import { render } from 'vitest-browser-react'

const { Default } = composeStories(stories)
const handleSelect = vi.fn()

describe('Given a default DropZone', async () => {
  beforeEach(async () => {
    // @ts-expect-error onSelect exists only on FileTrigger
    await render(<Default onSelect={handleSelect} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be possible to upload files using the upload button', async () => {
    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    await userEvent.upload(page.getByTestId('file-trigger'), testFile)

    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith([testFile])
  })

  it('should be possible to upload files using drag and drop', async () => {
    await userEvent.dragAndDrop(
      page.getByTestId('image'),
      page.getByTestId('drop-zone'),
    )

    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
})
