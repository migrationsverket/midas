import { render } from '@testing-library/react'
import { SidebarLink } from './SidebarLink'
import { LayoutProvider } from '../context/LayoutContext'
import { House } from 'lucide-react'

const renderSidebarLink = (href: string, active?: boolean) => {
  return render(
    <LayoutProvider
      items={[]}
      title="Test"
      user={{ name: 'Test', title: 'Test' }}
      app={{ name: 'Test' }}
      headerChildren={null}
      isCollapsed={false}
      setIsCollapsed={() => {}}
      variant="internal"
      id="test"
    >
      <SidebarLink
        title="Test Link"
        href={href}
        icon={House}
        active={active}
      />
    </LayoutProvider>
  )
}

describe('SidebarLink active state', () => {
  it('should apply active class when active prop is true', () => {
    const { container } = renderSidebarLink('/app', true)
    const link = container.querySelector('a')
    expect(link?.className).toContain('active')
  })

  it('should NOT apply active class when active prop is false', () => {
    const { container } = renderSidebarLink('/app', false)
    const link = container.querySelector('a')
    expect(link?.className).not.toContain('active')
  })

  it('should NOT apply active class when active prop is undefined', () => {
    const { container } = renderSidebarLink('/app')
    const link = container.querySelector('a')
    // Without mocking window.location, active will be false
    expect(link?.className).not.toContain('active')
  })

  it('should render link with correct href', () => {
    const { container } = renderSidebarLink('/test-path')
    const link = container.querySelector('a')
    expect(link?.getAttribute('href')).toBe('/test-path')
  })

  it('should render with correct title', () => {
    const { container } = renderSidebarLink('/app')
    const link = container.querySelector('a')
    expect(link?.getAttribute('aria-label')).toBe('Test Link')
  })
})
