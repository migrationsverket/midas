import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { Navbar } from './Navbar'
import { Header } from '../header'
import { LayoutBreakpointProvider } from '../layout/LayoutBreakpointContext'
import navbarStyles from './Navbar.module.css'
import headerStyles from '../header/Header.module.css'
import * as stories from './Navbar.stories'

const { FiveItems } = composeStories(stories)

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

  it('should stay visible past the default 640px split when the breakpoint is raised', async () => {
    // The mobile (320px) and desktop (1024px) test viewports straddle the
    // default 640px split. With an override of 2000px both are "mobile"
    // (<=2000px), so Navbar should be visible in both, unlike the ≤640px default.
    await render(
      <LayoutBreakpointProvider breakpoint={2000}>
        <Navbar>Navbar content</Navbar>
      </LayoutBreakpointProvider>,
    )

    await expect.element(page.getByText('Navbar content')).toBeVisible()
  })

  it('should stay hidden below the default 640px split when the breakpoint is lowered', async () => {
    // With an override of 100px both the mobile (320px) and desktop (1024px)
    // test viewports are "desktop" (>100px), so Navbar should be hidden in both.
    await render(
      <LayoutBreakpointProvider breakpoint={100}>
        <Navbar>Navbar content</Navbar>
      </LayoutBreakpointProvider>,
    )

    await expect.element(page.getByText('Navbar content')).not.toBeVisible()
  })

  it('should have a white background and a top border, matching Header', async () => {
    const { container } = await render(
      <>
        <Header />
        <Navbar>Navbar content</Navbar>
      </>,
    )

    const header = container.querySelector(
      `.${headerStyles.header}`,
    ) as HTMLElement
    const navbar = container.querySelector(
      `.${navbarStyles.navbar}`,
    ) as HTMLElement

    expect(getComputedStyle(navbar).backgroundColor).toBe(
      getComputedStyle(header).backgroundColor,
    )
    expect(getComputedStyle(navbar).borderTopWidth).not.toBe('0px')
  })

  it('should visually distinguish the active item from inactive ones', async () => {
    const { container } = await render(<FiveItems />)

    const links = [...container.querySelectorAll('a')]
    const active = links.find(el => el.textContent === 'Första') as HTMLElement
    const inactive = links.find(el => el.textContent === 'Andra') as HTMLElement

    const activeStyle = getComputedStyle(active)
    const inactiveStyle = getComputedStyle(inactive)

    expect(activeStyle.borderTopColor).not.toBe(inactiveStyle.borderTopColor)
    expect(activeStyle.backgroundColor).not.toBe(inactiveStyle.backgroundColor)
    expect(Number(activeStyle.fontWeight)).toBeGreaterThan(
      Number(inactiveStyle.fontWeight),
    )
  })
})
