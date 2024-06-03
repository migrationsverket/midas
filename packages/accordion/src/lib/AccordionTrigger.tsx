import React, { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { styled } from '@mvds/theme';
import { ChevronDownIcon } from './ChevronDown.icon';

const StyledHeader = styled(RadixAccordion.Header, {
  margin: '0',
});
export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  RadixAccordion.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader asChild>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledIcon aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const StyledTrigger = styled(RadixAccordion.Trigger, {
  backgroundColor: 'transparent',
  border: 0,
  padding: '1.5rem',
  cursor: 'pointer',
  fontSize: '1.25rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '10px',

  svg: {
    transition: `transform $transitionNormal cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="open"] svg': {
    transform: 'rotate(180deg)',
  },
});
const StyledIcon = styled(ChevronDownIcon, {
  width: '1.25rem',
  height: '1.25rem',
  color: '$input-text',
});
