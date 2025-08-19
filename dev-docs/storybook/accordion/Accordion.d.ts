import { DisclosureGroupProps } from 'react-aria-components';
import * as React from 'react';
export declare const ACCORDION_TEST_ID = "accordion";
export interface MidasAccordion extends DisclosureGroupProps {
    /**
     * Display either the larger contained variant or a smaller uncontained variant
     * @deprecated since 11.0.0. Please use `isContained` instead
     **/
    variant?: 'uncontained' | 'contained';
    children?: React.ReactNode;
    isDisabled?: boolean;
    isContained?: boolean;
}
/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */
export declare const Accordion: React.FC<MidasAccordion>;
