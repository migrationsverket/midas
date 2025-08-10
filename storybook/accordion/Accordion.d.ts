import { DisclosureGroupProps } from 'react-aria-components';
import * as React from 'react';
export declare const ACCORDION_TEST_ID = "accordion";
export interface MidasAccordion extends DisclosureGroupProps {
    /** Display either the larger contained variant or a smaller uncontained variant */
    variant?: 'uncontained' | 'contained';
}
/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */
export declare const Accordion: React.FC<MidasAccordion>;
