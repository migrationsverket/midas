import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import type { CSSProperties } from 'react'
import { Sidebar } from './Sidebar'
import styles from './Sidebar.module.css'

describe('Sidebar', () => {
  beforeEach(({ skip, task }) => {
    skip(
      task.file.projectName === 'mobile',
      'Sidebar is only relevant for desktop',
    )
  })

  it('should render children', async () => {
    await render(<Sidebar title='Test'>Sidebar content</Sidebar>)

    await expect.element(page.getByText('Sidebar content')).toBeVisible()
  })

  it('should show title when not collapsed', async () => {
    await render(<Sidebar title='My Sidebar'>Content</Sidebar>)

    await expect.element(page.getByText('My Sidebar')).toBeVisible()
  })

  it('should hide title when defaultCollapsed', async () => {
    await render(
      <Sidebar
        title='My Sidebar'
        defaultCollapsed
      >
        Content
      </Sidebar>,
    )

    await expect.element(page.getByText('My Sidebar')).not.toBeVisible()
  })

  it('should collapse when the collapse button is pressed', async () => {
    await render(<Sidebar title='My Sidebar'>Content</Sidebar>)

    await page.getByRole('button', { name: 'Collapse sidebar' }).click()

    await expect.element(page.getByText('My Sidebar')).not.toBeVisible()
  })

  it('should expand when the expand button is pressed', async () => {
    await render(
      <Sidebar
        title='My Sidebar'
        defaultCollapsed
      >
        Content
      </Sidebar>,
    )

    await page.getByRole('button', { name: 'Expand sidebar' }).click()

    await expect.element(page.getByText('My Sidebar')).toBeVisible()
  })

  it('should default to 300px width', async () => {
    const { container } = await render(<Sidebar title='Test'>Content</Sidebar>)

    const el = container.querySelector(`.${styles.sidebar}`) as HTMLElement
    expect(getComputedStyle(el).width).toBe('300px')
  })

  it('should use --midas-sidebar-width when set, bypassing CSS cascade order entirely', async () => {
    const { container } = await render(
      <Sidebar
        title='Test'
        style={{ '--midas-sidebar-width': '400px' } as CSSProperties}
      >
        Content
      </Sidebar>,
    )

    const el = container.querySelector(`.${styles.sidebar}`) as HTMLElement
    expect(getComputedStyle(el).width).toBe('400px')
  })

  it('should use --midas-sidebar-collapsed-width when collapsed and set', async () => {
    const { container } = await render(
      <Sidebar
        title='Test'
        defaultCollapsed
        style={{ '--midas-sidebar-collapsed-width': '80px' } as CSSProperties}
      >
        Content
      </Sidebar>,
    )

    const el = container.querySelector(`.${styles.sidebar}`) as HTMLElement
    expect(getComputedStyle(el).width).toBe('80px')
  })
})
