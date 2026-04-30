import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { Sidebar } from './Sidebar'

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
})
