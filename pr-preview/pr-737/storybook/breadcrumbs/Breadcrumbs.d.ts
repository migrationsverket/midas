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
/** @deprecated since v10.3.0 please use `BreadcrumbsProps` instead */
export type BreadcrumbProps<T extends BreadcrumbItem> = BreadcrumbsProps<T>;
