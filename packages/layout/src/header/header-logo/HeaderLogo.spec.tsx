import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { HeaderLogo } from './HeaderLogo'
import { LayoutBreakpointProvider } from '../../layout/LayoutBreakpointContext'
import styles from './HeaderLogo.module.css'

describe('HeaderLogo', () => {
  it('should show the small logo on mobile and the large logo on desktop', async ({
    task,
  }) => {
    const { container } = await render(<HeaderLogo />)

    const mobile = container.querySelector(`.${styles.mobile}`) as HTMLElement
    const desktop = container.querySelector(`.${styles.desktop}`) as HTMLElement

    if (task.file.projectName === 'mobile') {
      expect(getComputedStyle(mobile).display).not.toBe('none')
      expect(getComputedStyle(desktop).display).toBe('none')
    } else {
      expect(getComputedStyle(mobile).display).toBe('none')
      expect(getComputedStyle(desktop).display).not.toBe('none')
    }
  })

  it('should show the small logo on both viewports when the breakpoint is raised', async () => {
    // The mobile (320px) and desktop (1024px) test viewports straddle the
    // default 640px split. With an override of 2000px both are "mobile"
    // (<=2000px), so the small logo should show in both.
    const { container } = await render(
      <LayoutBreakpointProvider breakpoint={2000}>
        <HeaderLogo />
      </LayoutBreakpointProvider>,
    )

    const mobile = container.querySelector(`.${styles.mobile}`) as HTMLElement
    const desktop = container.querySelector(`.${styles.desktop}`) as HTMLElement

    expect(getComputedStyle(mobile).display).not.toBe('none')
    expect(getComputedStyle(desktop).display).toBe('none')
  })

  it('should show the large logo on both viewports when the breakpoint is lowered', async () => {
    // With an override of 100px both the mobile (320px) and desktop (1024px)
    // test viewports are "desktop" (>100px), so the large logo should show in both.
    const { container } = await render(
      <LayoutBreakpointProvider breakpoint={100}>
        <HeaderLogo />
      </LayoutBreakpointProvider>,
    )

    const mobile = container.querySelector(`.${styles.mobile}`) as HTMLElement
    const desktop = container.querySelector(`.${styles.desktop}`) as HTMLElement

    expect(getComputedStyle(mobile).display).toBe('none')
    expect(getComputedStyle(desktop).display).not.toBe('none')
  })
})
