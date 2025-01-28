'use client'

import styles from './Accordion.module.css'
import React from 'react'
import clsx from 'clsx'
import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  DisclosureProps,
  DisclosureGroupProps,
  Heading,
  HeadingProps
} from 'react-aria-components'
import { Button } from '@midas-ds/button'
import { ChevronDown } from 'lucide-react'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  title?: string
  children?: React.ReactNode
  headingLevel?: HeadingProps['level']
}

interface MidasAccordion extends DisclosureGroupProps {
  variant: 'subtle' | 'boxed'
}

/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  headingLevel = 3,
  ...props
}) => {
  return (
    <Disclosure
      {...props}
      className={clsx(styles.item, className)}
    >
      <Heading
        level={headingLevel}
        className={styles.trigger}
      >
        <Button
          slot='trigger'
          variant='icon'
        >
          <ChevronDown />
          <span className={styles.triggerText}>{title}</span>
        </Button>
      </Heading>
      <DisclosurePanel>
        <div className={styles.content}>{children}</div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export const Accordion: React.FC<MidasAccordion> = ({ variant, children }) => {
  return (
    <DisclosureGroup
      className={clsx(
        styles.root,
        variant === 'boxed' ? styles.boxed : styles.subtle
      )}
    >
      {children}
    </DisclosureGroup>
  )
}
