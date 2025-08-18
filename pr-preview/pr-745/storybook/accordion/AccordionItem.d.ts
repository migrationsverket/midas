import { DisclosureProps } from 'react-aria-components';
import { HeadingProps } from '../heading';
import { FeedbackStatus } from '../common/types';
import * as React from 'react';
interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
    /** The text displayed in the collapsed state. If a ReactNode is provided, a heading will not be automatically added, and you must provide one yourself. */
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    /** Adjust the heading level of the title to match your document's heading tag structure */
    headingLevel?: HeadingProps['elementType'];
    /** Display an accordion item with different type styles. */
    type?: FeedbackStatus;
    /**
     * Adds a background element to the content, set to false for a transparent look
     * @default true
     **/
    hasBackground?: boolean;
    isContained?: boolean;
}
export declare const AccordionItem: React.FC<MidasAccordionItem>;
export {};
