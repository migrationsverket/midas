import { DisclosureProps } from 'react-aria-components';
import { HeadingProps } from '../heading';
import * as React from 'react';
interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
    /** The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself. */
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    /** Adjust the titles heading level to your heading tag structure */
    headingLevel?: HeadingProps['elementType'];
    /** Display an accordion item in different status states */
    type?: 'default' | 'success' | 'warning';
}
export declare const AccordionItem: React.FC<MidasAccordionItem>;
export {};
