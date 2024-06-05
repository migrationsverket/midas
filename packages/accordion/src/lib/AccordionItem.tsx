import * as RadixAccordion from '@radix-ui/react-accordion'
import React, { forwardRef } from 'react'
import styles from './Accordion.module.css'
import clsx from 'clsx'

export const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  RadixAccordion.AccordionItemProps
>((props: RadixAccordion.AccordionItemProps, forwardedRef) => (
  <RadixAccordion.Item
    ref={forwardedRef}
    className={clsx(styles.accordionItem, props.className)}
    {...props}
  >
    {props.children}
  </RadixAccordion.Item>
))
