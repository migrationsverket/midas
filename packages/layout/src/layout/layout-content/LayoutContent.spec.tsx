import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { LayoutContent } from './LayoutContent'
import styles from './LayoutContent.module.css'

describe('LayoutContent', () => {
  it('should render children', async () => {
    await render(<LayoutContent>Content</LayoutContent>)

    await expect.element(page.getByText('Content')).toBeInTheDocument()
  })

  it('should stack children vertically on mobile and horizontally on desktop', async ({ task }) => {
    const { container } = await render(<LayoutContent>Content</LayoutContent>)

    const el = container.querySelector(`.${styles.layoutContent}`) as HTMLElement
    const flexDirection = getComputedStyle(el).flexDirection

    if (task.file.projectName === 'mobile') {
      expect(flexDirection).toBe('column')
    } else {
      expect(flexDirection).toBe('row')
    }
  })
})
