'use client'

import * as RadixAccordion from '@radix-ui/react-accordion'
import React, { forwardRef } from 'react'
import { AccordionTagContext, TextElementTag } from './AccordionTagContext' // Adjust the path as necessary

// Define a type for the combined props
type AccordionRootCombined =
  | RadixAccordion.AccordionSingleProps
  | RadixAccordion.AccordionMultipleProps

interface AccordionProps {
  /** Pick a heading tag to be rendered as the title in each accordion */
  headingTag?: TextElementTag
}

/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */

export const Accordion = forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  AccordionRootCombined & AccordionProps
>(({ headingTag = 'p', ...props }, ref) => (
  <AccordionTagContext.Provider value={headingTag}>
    <RadixAccordion.Root
      ref={ref}
      {...props}
    />
  </AccordionTagContext.Provider>
))
