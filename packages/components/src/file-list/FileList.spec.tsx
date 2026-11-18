import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './FileList.stories'
import styles from './FileList.module.css'
import { render } from '../../test-utils'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'
import { I18nProvider } from '../aria'

const {
  Default,
  WithoutFileSize,
  UploadingDeterminate,
  Uploading,
  Success,
  Error: ErrorStory,
  FocusManagementTest,
  WithPreview,
  PreviewInModal,
} = composeStories(stories)

const errorMessage =
  'Uppladdningen misslyckades. Kontrollera din anslutning och försök igen.'

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
    const { getByRole } = await render(<Success />)
    await expect.element(getByRole('button', { name: /remove/i })).toBeVisible()
    await expect
      .element(getByRole('status'))
      .toHaveTextContent('Upload complete: resume.pdf')
  })

  it('keeps the success state readable on the row, not only in the announcement', async () => {
    const { getByRole } = await render(<Success />)
    await expect
      .element(
        getByRole('listitem').getByText('Upload complete', { exact: true }),
      )
      .toBeInTheDocument()
  })

  // As text, not role="img": NVDA read the image role out loud, "grafik
  // Uppladdning klar"
  it('does not expose the checkmark as an image', async () => {
    const { getByRole } = await render(<Success />)
    await expect.element(getByRole('img')).not.toBeInTheDocument()
  })

  it('does not show the success state for other statuses', async () => {
    const { getByText } = await render(<Default />)
    await expect
      .element(getByText('Upload complete', { exact: true }))
      .not.toBeInTheDocument()
  })

  it('shows the error message and marks the row invalid', async () => {
    const { getByText } = await render(<ErrorStory />)
    await expect.element(getByText(errorMessage, { exact: true })).toBeVisible()
  })

  it('renders the status as a data attribute for each state', async () => {
    const { getByRole } = await render(<UploadingDeterminate />)
    await expect
      .element(getByRole('listitem'))
      .toHaveAttribute('data-status', 'uploading')
  })

  // Assert what is exposed and tied to which file, not the exact wording, which
  // UX and the a11y testing still decide on
  describe('screen reader output', () => {
    // Not just hidden: a node that stays in the DOM and only toggles
    // aria-hidden can linger in NVDA's browse mode buffer, so it read
    // "Laddar upp" after an upload had already finished or failed
    describe('only keeps the current state in the DOM', () => {
      const renderItem = (
        status: 'idle' | 'uploading' | 'success' | 'error',
      ) => (
        <FileList aria-label='Test'>
          <FileListItem
            fileName='resume.pdf'
            status={status}
            progress={40}
            errorMessage={errorMessage}
            onDelete={() => {
              // noop
            }}
          />
        </FileList>
      )

      it.each(['idle', 'success', 'error'] as const)(
        'has no progress bar in the DOM while %s',
        async status => {
          const { container } = await render(renderItem(status))
          expect(container.querySelector('[role="progressbar"]')).toBeNull()
        },
      )

      it.each(['idle', 'uploading', 'error'] as const)(
        'has no checkmark in the DOM while %s',
        async status => {
          const { container } = await render(renderItem(status))
          expect(container.querySelector(`.${styles.checkmark}`)).toBeNull()
        },
      )

      it('removes the progress bar when an upload finishes', async () => {
        const { container, rerender } = await render(renderItem('uploading'))
        expect(container.querySelector('[role="progressbar"]')).not.toBeNull()

        await rerender(renderItem('success'))
        expect(container.querySelector('[role="progressbar"]')).toBeNull()
      })
    })

    // Without a separator NVDA read the two spans as one word, "resume.pdf1.2 MB"
    it('separates the file name from the size', async () => {
      const { getByRole } = await render(<Success />)
      expect(getByRole('listitem').element().textContent).toContain(
        'resume.pdf, 1.2 MB',
      )
    })

    it('adds no separator when there is no file size', async () => {
      const { getByRole } = await render(
        <FileList aria-label='Test'>
          <FileListItem fileName='resume.pdf' />
        </FileList>,
      )
      expect(getByRole('listitem').element().textContent).not.toContain(',')
    })

    it('names the file in the upload progress', async () => {
      const { getByRole } = await render(<UploadingDeterminate />)
      await expect
        .element(getByRole('progressbar'))
        .toHaveAccessibleName(/large-video\.mp4/)
    })

    it('names the file when announcing a completed upload', async () => {
      const { getByRole } = await render(<Success />)
      await expect
        .element(getByRole('status'))
        .toHaveTextContent('Upload complete: resume.pdf')
    })

    it('announces a failed upload with the file and the error message', async () => {
      const { getByRole } = await render(<ErrorStory />)
      await expect
        .element(getByRole('status'))
        .toHaveTextContent(`resume.pdf: ${errorMessage}`)
    })

    // Every state reads in the same order: state, file name, size, button,
    // details. Uploading and success already start with their icon
    it('reads a failed upload before the file name and the button', async () => {
      const { getByRole, getByText } = await render(<ErrorStory />)
      const state = getByText('Upload failed', { exact: true }).element()
      const name = getByText('resume.pdf', { exact: true }).element()
      const button = getByRole('button', { name: /remove resume\.pdf/i })

      expect(
        state.compareDocumentPosition(name) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
      expect(
        state.compareDocumentPosition(button.element()) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    })

    it('marks a failed upload even without an error message', async () => {
      const { getByText } = await render(
        <FileList aria-label='Test'>
          <FileListItem
            fileName='resume.pdf'
            status='error'
          />
        </FileList>,
      )
      await expect
        .element(getByText('Upload failed', { exact: true }))
        .toBeInTheDocument()
    })

    describe('describes the row button with the state, for focus mode', () => {
      it('when the upload failed, with the error message', async () => {
        const { getByRole } = await render(<ErrorStory />)
        await expect
          .element(getByRole('button', { name: /remove resume\.pdf/i }))
          .toHaveAccessibleDescription(`Upload failed ${errorMessage}`)
      })

      it('when the upload is complete', async () => {
        const { getByRole } = await render(<Success />)
        await expect
          .element(getByRole('button', { name: /remove resume\.pdf/i }))
          .toHaveAccessibleDescription('Upload complete')
      })

      it('not for an idle file', async () => {
        const { getByRole } = await render(<Default />)
        await expect
          .element(getByRole('button', { name: /remove resume\.pdf/i }))
          .not.toHaveAccessibleDescription()
      })
    })

    it('announces nothing for an idle file', async () => {
      const { getByRole } = await render(
        <FileList aria-label='Test'>
          <FileListItem fileName='idle.pdf' />
        </FileList>,
      )
      await expect.element(getByRole('status')).toHaveTextContent('')
    })
  })

  describe('preview', () => {
    it('shows a preview button for idle and completed files', async () => {
      const { getByRole } = await render(<WithPreview />)
      await expect
        .element(getByRole('button', { name: 'Preview passport.jpg' }))
        .toBeVisible()
      await expect
        .element(getByRole('button', { name: 'Preview certificate.pdf' }))
        .toBeVisible()
    })

    it('hides it while uploading', async () => {
      const { getByRole } = await render(<WithPreview />)
      await expect
        .element(getByRole('button', { name: 'Preview photo.png' }))
        .not.toBeInTheDocument()
    })

    it('shows it when the upload failed, the file is still local', async () => {
      const { getByRole } = await render(
        <FileList aria-label='Test'>
          <FileListItem
            fileName='broken.png'
            status='error'
            onPreview={() => {
              // noop
            }}
          />
        </FileList>,
      )
      await expect
        .element(getByRole('button', { name: 'Preview broken.png' }))
        .toBeVisible()
    })

    it('shows no preview button without onPreview', async () => {
      const { getByRole } = await render(<Default />)
      await expect
        .element(getByRole('button', { name: /^preview/i }).first())
        .not.toBeInTheDocument()
    })

    it('calls onPreview when pressed', async () => {
      const onPreview = vi.fn()
      const { getByRole } = await render(
        <FileList aria-label='Test'>
          <FileListItem
            fileName='a.png'
            onPreview={onPreview}
          />
        </FileList>,
      )
      await getByRole('button', { name: 'Preview a.png' }).click()
      expect(onPreview).toHaveBeenCalledOnce()
    })

    it('comes before the delete button in the tab order', async () => {
      const { getByRole } = await render(<WithPreview />)
      const preview = getByRole('button', { name: 'Preview passport.jpg' })
      const remove = getByRole('button', { name: 'Remove passport.jpg' })
      expect(
        preview.element().compareDocumentPosition(remove.element()) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    })

    it('describes the preview button with the state, for focus mode', async () => {
      const { getByRole } = await render(<WithPreview />)
      await expect
        .element(getByRole('button', { name: 'Preview passport.jpg' }))
        .toHaveAccessibleDescription('Upload complete')
    })

    it('lets the app open its own preview', async () => {
      const { getByRole } = await render(<PreviewInModal />)
      await getByRole('button', { name: 'Preview landscape.svg' }).click()
      await expect
        .element(getByRole('dialog').getByRole('img', { name: 'landscape.svg' }))
        .toBeVisible()
    })
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

    it("moves focus to the next row's first button when there are previews", async () => {
      const PreviewRows = () => {
        const [files, setFiles] = useState(['a.png', 'b.png'])
        return (
          <FileList aria-label='Test'>
            {files.map(file => (
              <FileListItem
                key={file}
                fileName={file}
                onPreview={() => {
                  // noop
                }}
                onDelete={() => setFiles(f => f.filter(x => x !== file))}
              />
            ))}
          </FileList>
        )
      }
      const { getByRole } = await render(<PreviewRows />)
      await getByRole('button', { name: 'Remove a.png' }).click()
      await expect
        .element(getByRole('button', { name: 'Preview b.png' }))
        .toHaveFocus()
    })

    it("moves focus to the row's other button when the focused button disappears", async () => {
      const StartsUploadOnPreview = () => {
        const [status, setStatus] = useState<'success' | 'uploading'>(
          'success',
        )
        return (
          <FileList aria-label='Test'>
            <FileListItem
              fileName='a.png'
              status={status}
              onPreview={() => setStatus('uploading')}
              onDelete={() => {
                // noop
              }}
            />
          </FileList>
        )
      }
      const { getByRole } = await render(<StartsUploadOnPreview />)
      await getByRole('button', { name: 'Preview a.png' }).click()
      await expect
        .element(getByRole('button', { name: 'Cancel a.png' }))
        .toHaveFocus()
    })

    it('does not pull focus back when it had already left the list', async () => {
      const row = (status: 'success' | 'uploading') => (
        <FileList aria-label='Test'>
          <FileListItem
            fileName='a.png'
            status={status}
            onPreview={() => {
              // noop
            }}
            onDelete={() => {
              // noop
            }}
          />
        </FileList>
      )
      const { getByRole, rerender } = await render(row('success'))
      const preview = getByRole('button', { name: 'Preview a.png' })
      ;(preview.element() as HTMLElement).focus()
      ;(preview.element() as HTMLElement).blur()
      // Focus leaves first, and the status changes later, not in the same task
      await expect.poll(() => document.activeElement).toBe(document.body)
      await rerender(row('uploading'))
      await expect
        .element(getByRole('button', { name: 'Cancel a.png' }))
        .not.toHaveFocus()
      expect(document.activeElement).toBe(document.body)
    })

    it('does not pull focus back later when the app moved it out on removal', async () => {
      const MovesFocusToUndo = () => {
        const [files, setFiles] = useState(['a.png', 'b.png'])
        const [bStatus, setBStatus] = useState<'uploading' | 'success'>(
          'uploading',
        )
        return (
          <>
            <FileList aria-label='Test'>
              {files.map(file => (
                <FileListItem
                  key={file}
                  fileName={file}
                  status={file === 'b.png' ? bStatus : 'idle'}
                  onDelete={() => {
                    setFiles(f => f.filter(x => x !== file))
                    document.getElementById('undo')?.focus()
                  }}
                />
              ))}
            </FileList>
            <button id='undo'>Undo</button>
            <button onClick={() => setBStatus('success')}>Finish b</button>
          </>
        )
      }
      const { getByRole } = await render(<MovesFocusToUndo />)
      await getByRole('button', { name: 'Remove a.png' }).click()
      await expect.element(getByRole('button', { name: 'Undo' })).toHaveFocus()
      ;(document.activeElement as HTMLElement).blur()
      await expect.poll(() => document.activeElement).toBe(document.body)
      // An unrelated change in another row, with focus on <body>
      ;(
        getByRole('button', { name: 'Finish b' }).element() as HTMLElement
      ).click()
      await expect
        .element(getByRole('button', { name: 'Remove b.png' }))
        .toBeVisible()
      expect(document.activeElement).toBe(document.body)
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
