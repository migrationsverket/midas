import { describe, expect, it } from 'vitest'
import { variables } from '@midas-ds/theme'
import sidebarCss from '../sidebar/Sidebar.module.css?raw'
import navbarCss from '../navbar/Navbar.module.css?raw'
import headerLogoCss from '../header/header-logo/HeaderLogo.module.css?raw'

/**
 * Sidebar, Navbar and HeaderLogo each hardcode their own `@media (width ...)`
 * rule for the same mobile/desktop split, instead of sharing one generated
 * value (see the PR discussion on why a `@custom-media` token generated from
 * this value was tried and reverted). This test is the safety net that
 * replaces that: it fails loudly in CI if any of the three literals ever
 * drifts from `windowSizesLayoutSplit`, the value `useIsMobileDevice` reads
 * from `@midas-ds/theme` for the same split.
 */
describe('layout mobile/desktop breakpoint stays in sync with windowSizesLayoutSplit', () => {
  it.each([
    ['Sidebar.module.css', sidebarCss],
    ['Navbar.module.css', navbarCss],
    ['HeaderLogo.module.css', headerLogoCss],
  ])('%s uses the current windowSizesLayoutSplit value', (_file, css) => {
    expect(css).toContain(variables.windowSizesLayoutSplit)
  })
})
