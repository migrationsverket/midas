import * as RadixAccordion from '@radix-ui/react-accordion';
import React, { forwardRef } from 'react';

export type AccordionRootCombined =
  | RadixAccordion.AccordionSingleProps
  | RadixAccordion.AccordionMultipleProps;

export const Accordion = forwardRef<
  React.ElementRef<typeof RadixAccordion.Root>,
  AccordionRootCombined
>(({ ...props }: AccordionRootCombined, ref) => (
  <RadixAccordion.Root {...props} ref={ref} />
));

Accordion.displayName = 'Accordion';
