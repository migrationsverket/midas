import * as React from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'

export interface GridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  /** Removes outer margins for nested use. First Grid on a page should have outer margins.
   * @deprecated since v10.2.0 Use `isContained` prop instead.
   */
  fluid?: boolean
  /** A contained grid has a max-width and centered positioning on large screens. */
  isContained?: boolean
  /** Removes outer margins. */
  removeMargins?: boolean
}

/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */

export const Grid: React.FC<GridProps> = ({
  children,
  fluid = false,
  isContained = false,
  removeMargins = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(
        styles.container,
        fluid && styles.fluid,
        isContained && styles.contained,
        removeMargins && styles.removeMargins,
        rest.className,
      )}
    >
      <div className={styles.flex}>{children}</div>
    </div>
  )
}

/**
 * @deprecated since v10.2.0 Use `Grid` instead.
 */

export const Flex = Grid
