import React, { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { keyframes } from '@stitches/react';
import { styled, theme } from '@mvds/theme';

export const AccordionContent = forwardRef<
  HTMLDivElement,
  RadixAccordion.AccordionContentProps
>((props: RadixAccordion.AccordionContentProps, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{props.children}</StyledContentText>
  </StyledContent>
));

AccordionContent.displayName = 'AccordionContent';

const slideDown = keyframes({
  from: {
    height: '0',
    marginBottom: '0',
  },
  to: {
    height: 'var(--radix-accordion-content-height)',
    margin: '0.5rem 0 1.5rem 0',
  },
});
const slideUp = keyframes({
  from: {
    height: 'var(--radix-accordion-content-height)',
    margin: '0.5rem 0 1.5rem 0',
  },
  to: {
    height: '0',
    margin: '0',
  },
});
const StyledContent = styled(RadixAccordion.Content, {
  padding: '0 1.5rem',
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideDown} ${theme.transitions.normal} cubic-bezier(0.87, 0, 0.13, 1)`,
    margin: '0.5rem 0 1.5rem 0',
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} ${theme.transitions.normal} cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
const StyledContentText = styled('div', {});
