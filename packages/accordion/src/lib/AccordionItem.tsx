import { styled } from '@mvds/theme';
import * as RadixAccordion from '@radix-ui/react-accordion';
import React, { forwardRef } from 'react';

const StyledAccordionItem = styled(RadixAccordion.Item, {
  borderStyle: 'solid',
  borderColor: '$gray50',
  borderWidth: '1px 0 0 0',
  overflow: 'hidden',

  '&:last-child': {
    borderWidth: '1px 0 1px 0',
  },

  '&:hover': {
    backgroundColor: '$gray20',
  },

  '&:focus': {
    outline: '$black solid 1px',
  },
});

export const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  RadixAccordion.AccordionItemProps
>((props: RadixAccordion.AccordionItemProps, forwardedRef) => (
  <StyledAccordionItem {...props}></StyledAccordionItem>
));
AccordionItem.displayName = 'AccordionItem';
