import { LayoutContextProps, LayoutProvider } from '../context/LayoutContext'
import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { Sidebar } from './Sidebar'
import { House } from 'lucide-react'

const MockLayout = (
  props: Partial<LayoutContextProps> & { children?: React.ReactNode },
) => (
  <LayoutProvider
    clientSideRouter={vi.fn()}
    clientSideHref={href => '/my-app/' + href}
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
    {...props}
  >
    {props.children}
  </LayoutProvider>
)

describe('sidebar', () => {
  it('it should render an external link when using target="_blank"', async () => {
    await render(
      <MockLayout
        items={[
          {
            items: [
              {
                title: 'Google (external)',
                href: 'https://google.com',
                icon: House,
                target: '_blank',
              },
            ],
          },
        ]}
      >
        <Sidebar />
      </MockLayout>,
    )
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('href', 'https://google.com')
  })

  it('it should render an internal link when omitting target="_blank"', async () => {
    await render(
      <MockLayout
        items={[
          {
            items: [
              {
                title: 'Hem',
                href: 'https://google.com',
                icon: House,
              },
            ],
          },
        ]}
      >
        <Sidebar />
      </MockLayout>,
    )
    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('href', '/my-app/https://google.com')
  })
})
