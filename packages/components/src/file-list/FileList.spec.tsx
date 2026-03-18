import { describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './FileList.stories'
import styles from './FileList.module.css'
import { render } from '../../test-utils'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'

const { Default, WithoutFileSize } = composeStories(stories)

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
          id='1'
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

})
