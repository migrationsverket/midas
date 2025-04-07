import { SidebarLinkGroup, SidebarUser, App } from '../Layout';
import { Href } from '@react-types/shared';
import * as React from 'react';
interface LayoutContextProps {
    items: SidebarLinkGroup[];
    title: string;
    user: SidebarUser;
    app: App;
    headerChildren: React.ReactNode;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    isOpened?: boolean;
    setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
    clientSideRouter?: (path: string, routerOptions: undefined) => void;
    clientSideHref?: (href: Href) => string;
    variant: 'internal' | 'external';
}
export declare const LayoutProvider: React.FC<LayoutContextProps & {
    children: React.ReactNode;
}>;
export declare const useLayoutContext: () => LayoutContextProps;
export {};
