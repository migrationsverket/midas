import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './DropZone.stories'

const { Default } = composeStories(stories)
const onSelect = vi.fn()

describe('Given a default DropZone', async () => {
  beforeEach(async () => {
    await Default.run({
      args: {
        // @ts-expect-error onSelect exists only on FileTrigger
        onSelect,
      },
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be possible to upload files using the upload button', async () => {
    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    await userEvent.upload(page.getByTestId('file-trigger'), testFile)

    expect(onSelect).toHaveBeenCalledTimes(1)

    expect(onSelect).toHaveBeenCalledWith([testFile])
  })

  it('should be possible to upload files using drag and drop', async () => {
    await userEvent.dragAndDrop(
      page.getByTestId('image'),
      page.getByTestId('drop-zone'),
    )

    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
