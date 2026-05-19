import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import styles from './PanelContent.module.css'

export type PanelContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelContent = forwardRef<HTMLDivElement, PanelContentProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex -- WCAG 2.1.1: scrollable regions must be keyboard-reachable
        className={clsx(className, styles.panelContent)}
        {...rest}
      />
    )
  },
)
