import React, { forwardRef } from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import styles from './Accordion.module.css'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { useAccordionTag } from './AccordionTagContext' // Adjust the path as necessary

type AccordionTriggerProps = RadixAccordion.AccordionTriggerProps

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => {
  const Tag = useAccordionTag()

  return (
    <RadixAccordion.Header
      className={styles.accordionHeader}
      asChild
    >
      <RadixAccordion.Trigger
        ref={forwardedRef}
        className={clsx(styles.accordionTrigger, props.className)}
        {...props}
      >
        <Tag className={styles.accordionTriggerText}>{children}</Tag>
        <ChevronDown />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
})
