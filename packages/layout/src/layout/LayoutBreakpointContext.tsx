'use client'

import { createContext, type ReactNode } from 'react'

/**
 * Overrides the mobile/desktop breakpoint (in px) used by `useIsMobileDevice`
 * and, in turn, by `Sidebar`, `Navbar`, `HeaderLogo` and `MobileMenu`.
 *
 * `undefined` means "no override" — components fall back to the
 * `windowSizesLayoutSplit` token from `@midas-ds/theme` (640px). Setting an
 * override switches the affected components to a JS-driven visibility check
 * instead, since a hardcoded CSS `@media` condition can never see a runtime
 * value.
 */
export const LayoutBreakpointContext = createContext<number | undefined>(
  undefined,
)

/**
 * `Layout` is a Server Component so it doesn't force a client boundary on
 * every consumer that doesn't use `breakpoint`. React Context can't be
 * rendered directly from a Server Component even when the context itself was
 * created in a `'use client'` file — the Provider has to be rendered from an
 * explicit Client Component instead, which is what this wrapper is for.
 * See: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#context-providers
 */
export const LayoutBreakpointProvider = ({
  breakpoint,
  children,
}: {
  breakpoint?: number
  children?: ReactNode
}) => (
  <LayoutBreakpointContext.Provider value={breakpoint}>
    {children}
  </LayoutBreakpointContext.Provider>
)
