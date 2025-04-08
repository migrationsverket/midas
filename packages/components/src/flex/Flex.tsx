import * as React from 'react'
import styles from './Flex.module.css'
import clsx from 'clsx'

export interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  /** Removes outer margins for nested use. First Flex on a page should have outer margins. */
  fluid?: boolean
}

/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use FlexItem to manage each column.
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */

export const Flex: React.FC<FlexProps> = ({
  children,
  fluid = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(styles.container, fluid && styles.fluid, rest.className)}
    >
      <div className={styles.flex}>{children}</div>
    </div>
  )
}
