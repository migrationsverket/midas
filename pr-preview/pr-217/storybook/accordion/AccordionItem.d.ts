import { DisclosureProps, HeadingProps } from 'react-aria-components';
import * as React from 'react';
interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
    /** The text displayed in the collapsed state */
    title?: string;
    children?: React.ReactNode;
    /** Adjust the titles heading level to your heading tag structure */
    headingLevel?: HeadingProps['level'];
}
export declare const AccordionItem: React.FC<MidasAccordionItem>;
export {};
