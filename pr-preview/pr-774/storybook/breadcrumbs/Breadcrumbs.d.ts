import { BreadcrumbsProps as AriaBreadcrumbsProps } from 'react-aria-components';
export interface BreadcrumbItem {
    href: string;
    title: string;
    isDisabled?: boolean;
}
export interface BreadcrumbsProps<T extends BreadcrumbItem> extends AriaBreadcrumbsProps<T> {
    items: T[];
}
export declare const Breadcrumbs: <T extends BreadcrumbItem>({ items, className, ...rest }: BreadcrumbsProps<T>) => import("react/jsx-runtime").JSX.Element;
