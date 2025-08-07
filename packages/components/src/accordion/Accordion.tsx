'use client'

import styles from './Accordion.module.css'
import * as React from 'react'
import clsx from 'clsx'
import { DisclosureGroup, DisclosureGroupProps } from 'react-aria-components'

export const ACCORDION_TEST_ID = 'accordion'

export interface MidasAccordion extends DisclosureGroupProps {
  /** Display either the larger contained variant or a smaller uncontained variant */
  variant?: 'uncontained' | 'contained'
}

/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */

export const Accordion: React.FC<MidasAccordion> = ({
  variant = 'uncontained',
  children,
  className,
  ...props
}) => {
  return (
    <DisclosureGroup
      data-testid={ACCORDION_TEST_ID}
      className={clsx(
        styles.root,
        variant === 'contained' ? styles.contained : styles.uncontained,
        className,
      )}
      {...props}
    >
      {children}
    </DisclosureGroup>
  )
}
