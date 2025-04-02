import { HeadingProps } from '../heading';
import { ButtonProps } from 'react-aria-components';
import * as React from 'react';
export interface MidasCard extends React.HTMLAttributes<HTMLDivElement> {
    /** Stack content in card vertical or horizontal */
    horizontal?: boolean;
    /** Card status to showcase different senarios */
    status?: 'warning' | 'error' | 'success';
    state?: 'active' | 'edit';
    /** Card content, usually wrap with CardContent */
    children: React.ReactNode;
}
export interface MidasCardContext {
    horizontal?: MidasCard['horizontal'];
    status?: MidasCard['status'];
    state?: MidasCard['state'];
}
export interface MidasCardImage {
    /** Custom image component to be used instead of the default img tag */
    as?: React.ElementType;
    className?: string;
    [key: string]: unknown;
}
export declare const Card: React.FC<MidasCard>;
export declare const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardTitle: React.FC<HeadingProps>;
export declare const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const CardActionArea: React.FC<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const CardImage: React.FC<MidasCardImage>;
