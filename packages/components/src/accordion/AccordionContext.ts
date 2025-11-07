import { createContext } from 'react'
import { MidasAccordion } from './Accordion'

export type AccordionContextValue = Pick<MidasAccordion, 'isContained' | 'size'>

export const AccordionContext = createContext<
  AccordionContextValue | undefined
>(undefined)
