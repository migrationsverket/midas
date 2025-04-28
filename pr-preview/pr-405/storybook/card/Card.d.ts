import { HeadingProps } from '../heading';
import { ButtonProps, Link } from 'react-aria-components';
import * as React from 'react';
export interface MidasCard extends React.HTMLAttributes<HTMLDivElement> {
    /** Stack content in card vertical or horizontal */
    horizontal?: boolean;
    /** Card content, usually wrap with CardContent */
    children: React.ReactNode;
}
export interface MidasCardContext {
    horizontal?: MidasCard['horizontal'];
    titleId?: string;
}
export interface MidasCardImage {
    /** Custom image component to be used instead of the default img tag */
    as?: React.ElementType;
    className?: string;
    [key: string]: unknown;
}
interface MidasCardLink<C extends React.ElementType> {
    children: React.ReactNode;
    as?: C;
}
export type LinkProps<C extends React.ElementType> = MidasCardLink<C> & Omit<React.ComponentProps<C>, keyof MidasCardLink<C>>;
export declare const Card: React.FC<MidasCard>;
export declare const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardTitle: React.FC<HeadingProps>;
export declare const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardActionArea: React.FC<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const CardImage: React.FC<MidasCardImage>;
export declare const CardLink: <C extends React.ElementType = (props: import('react-aria-components').LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null>({ children, as, ...rest }: LinkProps<C>) => import("react/jsx-runtime").JSX.Element;
export {};
