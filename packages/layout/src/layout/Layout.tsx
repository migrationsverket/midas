import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Layout.module.css'
import { SkipToContent } from './skip-to-content'
import { LayoutBreakpointProvider } from './LayoutBreakpointContext'

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
   * Overrides the default mobile/desktop breakpoint (640px) used by
   * `Sidebar`, `Navbar`, `HeaderLogo` and `MobileMenu`, in px.
   *
   * @default undefined - use the built-in `windowSizesLayoutSplit` theme token
   */
  breakpoint?: number
}

export const Layout = ({
  children,
  className,
  breakpoint,
  ...rest
}: LayoutProps) => {
  return (
    <div
      className={clsx(className, styles.layout)}
      {...rest}
    >
      <SkipToContent />
      <LayoutBreakpointProvider breakpoint={breakpoint}>
        {children}
      </LayoutBreakpointProvider>
    </div>
  )
}
