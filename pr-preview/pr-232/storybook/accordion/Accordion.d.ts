import { DisclosureGroupProps } from 'react-aria-components';
import * as React from 'react';
interface MidasAccordion extends DisclosureGroupProps {
    /** Display either the larger contained variant or a smaller uncontained variant */
    variant?: 'uncontained' | 'contained';
    /** Weither to allow the user to have multiple accordions open at the same time */
    type?: 'single' | 'multiple';
}
/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */
export declare const Accordion: React.FC<MidasAccordion>;
export {};
