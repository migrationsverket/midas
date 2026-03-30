import { createContext } from 'react'
import { AccordionProps } from './Accordion'

export type AccordionContextValue = Pick<AccordionProps, 'isContained' | 'size'>

export const AccordionContext = createContext<
  AccordionContextValue | undefined
>(undefined)
