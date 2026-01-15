import { SidebarLink } from './SidebarLink'
import { LayoutProvider } from '../context/LayoutContext'
import { House } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import styles from '../Layout.module.css'

const renderSidebarLink = (href: string, active?: boolean) => {
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
  it('should apply active class when active prop is true', () => {
    renderSidebarLink('/app', true)
    expect(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class when a sub item is active', () => {
    renderSidebarLink('/')
    expect(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class a sub item is active', () => {
    renderSidebarLink('/app', true)
    expect(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is false', () => {
    renderSidebarLink('/app', false)
    expect(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is undefined', () => {
    renderSidebarLink('/app')
    // Without mocking window.location, active will be false
    expect(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should render link with correct href', () => {
    renderSidebarLink('/test-path')
    expect(page.getByRole('link').element().getAttribute('href')).toBe(
      '/test-path',
    )
  })

  it('should render with correct title', () => {
    renderSidebarLink('/app')
    expect(page.getByRole('link').element().getAttribute('aria-label')).toBe(
      'Test Link',
    )
  })
})
