import { SidebarLink } from './SidebarLink'
import { LayoutProvider } from '../context/LayoutContext'
import { House } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import styles from '../Layout.module.css'

const renderSidebarLink = async (href: string, active?: boolean) => {
  return render(
    <LayoutProvider
      items={[]}
      title='Test'
      user={{ name: 'Test', title: 'Test' }}
      app={{ name: 'Test' }}
      headerChildren={null}
      isCollapsed={false}
      setIsCollapsed={() => {
        // noop
      }}
      variant='internal'
      id='test'
    >
      <SidebarLink
        title='Test Link'
        href={href}
        icon={House}
        active={active}
      />
    </LayoutProvider>,
  )
}

describe('SidebarLink active state', () => {
  it('should apply active class when active prop is true', async () => {
    await renderSidebarLink('/app', true)
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class when a sub item is active', async () => {
    await renderSidebarLink('/')
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class a sub item is active', async () => {
    await renderSidebarLink('/app', true)
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is false', async () => {
    await renderSidebarLink('/app', false)
    await expect.element(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is undefined', async () => {
    await renderSidebarLink('/app')
    // Without mocking window.location, active will be false
    await expect.element(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should render link with correct href', async () => {
    await renderSidebarLink('/test-path')
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('href', '/test-path')
  })

  it('should render with correct title', async () => {
    await renderSidebarLink('/app')
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('aria-label', 'Test Link')
  })
})
