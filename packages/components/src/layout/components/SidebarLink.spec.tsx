import { SidebarLink } from './SidebarLink'
import { LayoutContextProps, LayoutProvider } from '../context/LayoutContext'
import { House } from 'lucide-react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'

const renderLayout = (
  props: Partial<LayoutContextProps> & { children?: React.ReactNode },
) =>
  render(
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
      {props.children}
    </LayoutProvider>,
  )

const renderSidebarLink = async ({
  href,
  active,
  onClick,
}: Pick<SidebarLinkProps, 'href' | 'active' | 'onClick'>) =>
  renderLayout({
    children: (
      <SidebarLink
        title='Test Link'
        href={href}
        icon={House}
        active={active}
        onClick={onClick}
      />
    ),
  })

describe('SidebarLink active state', () => {
  it('should apply active class when active prop is true', async () => {
    await renderSidebarLink({ href: '/app', active: true })
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class when a sub item is active', async () => {
    await renderSidebarLink({ href: '/' })
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should apply active class a sub item is active', async () => {
    await renderSidebarLink({ href: '/app', active: true })
    await expect.element(page.getByRole('link')).toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is false', async () => {
    await renderSidebarLink({ href: '/app', active: false })
    await expect.element(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should NOT apply active class when active prop is undefined', async () => {
    await renderSidebarLink({ href: '/app' })
    // Without mocking window.location, active will be false
    await expect.element(page.getByRole('link')).not.toHaveClass(styles.active)
  })

  it('should render link with correct href', async () => {
    await renderSidebarLink({ href: '/test-path' })
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('href', '/test-path')
  })

  it('should render with correct title', async () => {
    await renderSidebarLink({ href: '/app' })
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('aria-label', 'Test Link')
  })
})

describe('SidebarLink with onClick handler', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should call the event handler with correct href and title', async () => {
    const handleClick = vi.fn()
    await renderSidebarLink({ href: '#', onClick: handleClick })
    await page.getByRole('link').click()

    expect(handleClick).toHaveBeenCalledOnce()
    expect(handleClick).toHaveBeenCalledWith({
      href: '#',
      title: 'Test Link',
    })
  })
})
