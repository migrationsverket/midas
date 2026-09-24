import { describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './FileList.stories'
import styles from './FileList.module.css'
import { render } from '../../test-utils'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'
import { I18nProvider } from '../utils/intl'

const {
  Default,
  WithoutFileSize,
  UploadingDeterminate,
  Uploading,
  Success,
  Error: ErrorStory,
  FocusManagementTest,
} = composeStories(stories)

describe('FileList', () => {
  it('renders all file items', async () => {
    await render(<Default />)
    const rows = document.querySelectorAll('li')
    expect(rows).toHaveLength(3)
  })

  it('renders file names', async () => {
    const { getByText } = await render(<Default />)
    await expect.element(getByText('resume.pdf')).toBeVisible()
    await expect.element(getByText('cover-letter.docx')).toBeVisible()
  })

  it('renders file sizes', async () => {
    const { getByText } = await render(<Default />)
    await expect.element(getByText('1.2 MB')).toBeVisible()
  })

  it('does not render file size when not provided', async () => {
    const { getByRole } = await render(<WithoutFileSize />)
    const list = getByRole('list')
    await expect.element(list).not.toHaveTextContent('MB')
  })

  it('calls onDelete when delete button is pressed', async () => {
    const onDelete = vi.fn()
    const { getByRole } = await render(
      <FileList aria-label='Test'>
        <FileListItem
          fileName='resume.pdf'
          fileSize='1.2 MB'
          onDelete={onDelete}
        />
      </FileList>,
    )
    await getByRole('button', { name: /remove resume\.pdf/i }).click()
    expect(onDelete).toHaveBeenCalledOnce()
  })

  it('applies custom className to the list', async () => {
    const { getByRole } = await render(<Default className='custom-class' />)
    await expect
      .element(getByRole('list'))
      .toHaveClass(styles.fileList, 'custom-class')
  })

  it('renders the remove-file button with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Default />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Ta bort')
  })

  it('shows determinate upload progress', async () => {
    const { getByRole } = await render(<UploadingDeterminate />)
    await expect
      .element(getByRole('progressbar'))
      .toHaveAttribute('aria-valuenow', '40')
  })

  it('shows indeterminate upload progress when no value is given', async () => {
    const { getByRole } = await render(<Uploading />)
    await expect
      .element(getByRole('progressbar'))
      .not.toHaveProperty('aria-valuenow')
  })

  it('labels the delete button as cancel while uploading', async () => {
    const { getByRole } = await render(<UploadingDeterminate />)
    await expect
      .element(getByRole('button', { name: /cancel large-video\.mp4/i }))
      .toBeVisible()
  })

  it('calls onCancel, not onDelete, when the cancel button is pressed during upload', async () => {
    const onCancel = vi.fn()
    const onDelete = vi.fn()
    const { getByRole } = await render(
      <FileList aria-label='Test'>
        <FileListItem
          fileName='video.mp4'
          status='uploading'
          onCancel={onCancel}
          onDelete={onDelete}
        />
      </FileList>,
    )
    await getByRole('button', { name: /cancel video\.mp4/i }).click()
    expect(onCancel).toHaveBeenCalledOnce()
    expect(onDelete).not.toHaveBeenCalled()
  })

  it('falls back to onDelete during upload when onCancel is not provided', async () => {
    const onDelete = vi.fn()
    const { getByRole } = await render(
      <FileList aria-label='Test'>
        <FileListItem
          fileName='video.mp4'
          status='uploading'
          onDelete={onDelete}
        />
      </FileList>,
    )
    await getByRole('button', { name: /cancel video\.mp4/i }).click()
    expect(onDelete).toHaveBeenCalledOnce()
  })

  it('shows a success indicator and announces completion', async () => {
    const { getByRole, getByText } = await render(<Success />)
    await expect.element(getByRole('button', { name: /remove/i })).toBeVisible()
    await expect.element(getByText('Upload complete')).toBeInTheDocument()
  })

  it('shows the error message and marks the row invalid', async () => {
    const { getByText } = await render(<ErrorStory />)
    await expect.element(getByText('Det gick inte bra')).toBeVisible()
  })

  it('renders the status as a data attribute for each state', async () => {
    const { getByRole } = await render(<UploadingDeterminate />)
    await expect
      .element(getByRole('listitem'))
      .toHaveAttribute('data-status', 'uploading')
  })

  it('only announces upload completion for the success status', async () => {
    const { getByRole } = await render(<ErrorStory />)
    await expect.element(getByRole('status')).toHaveTextContent('')
  })

  describe('focus management on removal', () => {
    it('moves focus to a sibling button when the focused row is actually removed', async () => {
      // @ts-expect-error initialFiles exists only on the test container
      const { getByRole } = await render(
        <FocusManagementTest initialFiles={['a.pdf', 'b.pdf', 'c.pdf']} />,
      )
      await getByRole('button', { name: /remove a\.pdf/i }).click()
      await expect
        .element(getByRole('button', { name: /remove b\.pdf/i }))
        .toHaveFocus()
    })

    it('falls back to the list container when the last row is removed', async () => {
      // @ts-expect-error initialFiles exists only on the test container
      const { getByRole } = await render(
        <FocusManagementTest initialFiles={['only.pdf']} />,
      )
      await getByRole('button', { name: /remove only\.pdf/i }).click()
      await expect.element(getByRole('list')).toHaveFocus()
    })

    it('does not move focus when the row is not actually removed', async () => {
      const { getByRole } = await render(
        <FileList aria-label='Test'>
          <FileListItem
            fileName='a.pdf'
            onDelete={() => {
              // noop — simulates a delete that fails and leaves the row in place
            }}
          />
          <FileListItem
            fileName='b.pdf'
            onDelete={() => {
              // noop
            }}
          />
        </FileList>,
      )
      const button = getByRole('button', { name: /remove a\.pdf/i })
      await button.click()
      await expect.element(button).toHaveFocus()
    })
  })
})
