import { createContext, useContext } from 'react'

export type TextElementTag = keyof Pick<
  JSX.IntrinsicElements,
  'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'em'
>

export const AccordionTagContext = createContext<TextElementTag>('p')

export const useAccordionTag = () => useContext(AccordionTagContext)
