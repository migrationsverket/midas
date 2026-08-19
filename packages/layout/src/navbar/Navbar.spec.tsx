import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('should render children', async () => {
    await render(<Navbar>Navbar content</Navbar>)

    await expect.element(page.getByText('Navbar content')).toBeInTheDocument()
  })

  it('should be visible on mobile and hidden on desktop', async ({ task }) => {
    await render(<Navbar>Navbar content</Navbar>)

    const content = page.getByText('Navbar content')

    if (task.file.projectName === 'mobile') {
      await expect.element(content).toBeVisible()
    } else {
      await expect.element(content).not.toBeVisible()
    }
  })
})
