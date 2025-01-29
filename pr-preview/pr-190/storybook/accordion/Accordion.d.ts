import { default as React } from '../../../../node_modules/react';
import { TextElementTag } from './AccordionTagContext';
import * as RadixAccordion from '@radix-ui/react-accordion';
type AccordionRootCombined = RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps;
interface AccordionProps {
    /** Pick a heading tag to be rendered as the title in each accordion */
    headingTag?: TextElementTag;
}
/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */
export declare const Accordion: React.ForwardRefExoticComponent<(AccordionRootCombined & AccordionProps) & React.RefAttributes<HTMLDivElement>>;
export {};
