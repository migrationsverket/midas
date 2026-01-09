import { render, screen } from '@testing-library/react'
import { SidebarLink } from './SidebarLink'
import { LayoutProvider } from '../context/LayoutContext'
import { House } from 'lucide-react'

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
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should apply active class when active prop is true', () => {
    renderSidebarLink('/app', true)
    expect(screen.getByRole('link')).toHaveClass('active')
  })

  it('should apply active class when a sub item is active', () => {
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location,
      pathname: '/one/two',
    })
    renderSidebarLink('/one')
    expect(screen.getByRole('link')).toHaveClass('active')
  })

  it('should apply active class a sub item is active', () => {
    renderSidebarLink('/app', true)
    expect(screen.getByRole('link')).toHaveClass('active')
  })

  it('should NOT apply active class when active prop is false', () => {
    renderSidebarLink('/app', false)
    expect(screen.getByRole('link')).not.toHaveClass('active')
  })

  it('should NOT apply active class when active prop is undefined', () => {
    renderSidebarLink('/app')
    // Without mocking window.location, active will be false
    expect(screen.getByRole('link')).not.toHaveClass('active')
  })

  it('should render link with correct href', () => {
    renderSidebarLink('/test-path')
    expect(screen.getByRole('link').getAttribute('href')).toBe('/test-path')
  })

  it('should render with correct title', () => {
    renderSidebarLink('/app')
    expect(screen.getByRole('link').getAttribute('aria-label')).toBe(
      'Test Link',
    )
  })
})
