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
  Heading
} from 'react-aria-components'
import { Button } from '@midas-ds/button'
import { ChevronDown } from 'lucide-react'

// interface AccordionProps {
//   /** Pick a heading tag to be rendered as the title in each accordion */
//   headingTag?: TextElementTag
// }

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  title?: string
  children?: React.ReactNode
}

interface MidasAccordion extends DisclosureGroupProps {
  variant: 'subtle' | 'boxed'
}

/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */

// export const Accordion = forwardRef<
//   React.ElementRef<typeof RadixAccordion.Root>,
//   AccordionRootCombined & AccordionProps
// >(({ headingTag = 'p', ...props }, ref) => (
//   <AccordionTagContext.Provider value={headingTag}>
//     <RadixAccordion.Root
//       className={clsx(styles.root, ...(props.className || ''))}
//       ref={ref}
//       {...props}
//     />
//   </AccordionTagContext.Provider>
// ))

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <Disclosure
      {...props}
      className={clsx(styles.item, className)}
    >
      <Heading className={styles.trigger}>
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
