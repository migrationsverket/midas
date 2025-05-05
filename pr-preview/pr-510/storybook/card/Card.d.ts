import { Link, LinkProps, RouterProvider } from '../link/Link';
import * as React from 'react';
export interface CardProps<C extends React.ElementType = typeof Link> extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional image displayed at the top of card */
    image?: {
        source: string;
        description: string;
    };
    /** Sets background to predetermined color
     *  @default false
     *  @deprecated since v5.0.0
     * */
    background?: boolean;
    /** Header as h1 for the component rendered below image if there is one */
    title: string;
    /** Content as p element for the component */
    content: string;
    /** Props for when card element is clicked */
    link: LinkProps<C>;
    /** Adjust the tag to be used for the header
     * @default 'h1'
     */
    headingTag?: React.ElementType;
    /** Custom image component to be used instead of the default img tag */
    customImageComponent?: React.ReactElement;
    /** Custom link component to be used instead of the default a tag. For example your client side router link. */
    customLinkComponent?: React.ElementType;
}
/**
 * This component renders a card with optional image, title, content.
 *
 * @see {@link https://designsystem.migrationsverket.se/components/card/}
 */
export declare const Card: React.FC<CardProps>;
export { RouterProvider };
