import React, { forwardRef } from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import styles from './Accordion.module.css'
import clsx from 'clsx'

export const AccordionContent = forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionContentProps
>((props: RadixAccordion.AccordionContentProps, forwardedRef) => (
  <RadixAccordion.Content
    ref={forwardedRef}
    className={clsx(styles.content, props.className)}
    {...props}
  >
    {props.children}
  </RadixAccordion.Content>
))
