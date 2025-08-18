import { createContext } from 'react';

export interface AccordionContextValue {
  isContained: boolean;
}

export const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);
