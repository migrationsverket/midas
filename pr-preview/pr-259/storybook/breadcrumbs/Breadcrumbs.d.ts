export interface BreadcrumbProps {
    items: MidasBreadcrumb[];
}
export interface MidasBreadcrumb {
    href: string;
    title: string;
    isDisabled?: boolean;
}
export declare const Breadcrumbs: React.FC<BreadcrumbProps>;
