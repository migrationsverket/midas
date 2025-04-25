export interface BreadcrumbProps {
    items: {
        href: string;
        title: string;
        isDisabled?: boolean;
    }[];
}
export declare const Breadcrumbs: React.FC<BreadcrumbProps>;
