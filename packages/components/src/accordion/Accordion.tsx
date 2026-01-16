'use client'

import styles from './Accordion.module.css'
import * as React from 'react'
import clsx from '../utils/clsx'
import { DisclosureGroup, DisclosureGroupProps } from 'react-aria-components'
import { AccordionContext } from './AccordionContext'
import { Size } from '../common/types'

export interface AccordionProps extends DisclosureGroupProps {
  children?: React.ReactNode
  isDisabled?: boolean
  isContained?: boolean
  /** Component size when used with `isContained` (large: height 48px, medium: height 40px)
   *  @default 'large'
   **/
  size?: Size
}

/**
 * @deprecated since v 16.4.1 please use AccordionProps instead
 */
export type MidasAccordion = AccordionProps

/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */
export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  isContained,
  size = 'large',
  ...props
}) => {
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
