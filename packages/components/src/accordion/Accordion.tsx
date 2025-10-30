'use client'

import styles from './Accordion.module.css'
import * as React from 'react'
import clsx from '../utils/clsx'
import { DisclosureGroup, DisclosureGroupProps } from 'react-aria-components'
import { AccordionContext } from './AccordionContext'
import { Size } from '../common/types'

export interface MidasAccordion extends DisclosureGroupProps {
  /**
   * Display either the larger contained variant or a smaller uncontained variant
   * @deprecated since 11.0.0. Please use `isContained` instead
   **/
  variant?: 'uncontained' | 'contained'
  children?: React.ReactNode
  isDisabled?: boolean
  isContained?: boolean
  /** Component size when used with `isContained` (large: height 48px, medium: height 40px)
   *  @default 'large'
   **/
  size?: Size
}

/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */

export const Accordion: React.FC<MidasAccordion> = ({
  variant,
  children,
  className,
  isContained: isContainedFromProp,
  size = 'large',
  ...props
}) => {
  const isContained = isContainedFromProp || variant === 'contained'

  return (
    <AccordionContext.Provider value={{ isContained, size }}>
      <DisclosureGroup
        className={clsx(
          styles.root,
          isContained ? styles.contained : styles.uncontained,
          className,
        )}
        {...props}
      >
        {children}
      </DisclosureGroup>
    </AccordionContext.Provider>
  )
}
