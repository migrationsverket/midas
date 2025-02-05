import { LucideIcon } from 'lucide-react';
import { default as React } from '../../../../node_modules/react';
export interface SidebarLinkGroup {
    title?: string;
    items: SidebarLink[];
}
export interface SidebarLink {
    title: string;
    href: string;
    icon: LucideIcon;
    active?: boolean;
}
export interface SidebarUser {
    name: string;
    title: string;
}
type HEX = `#${string}`;
interface App {
    name: string;
    color?: HEX;
}
export interface MidasLayout {
    items: SidebarLinkGroup[];
    title: string;
    children: React.ReactNode;
    headerChildren: React.ReactNode;
    user: SidebarUser;
    app: App;
    clientSideRouter?: (path: string, routerOptions: undefined) => void;
}
export interface MidasHeader {
    title: string;
    headerChildren: React.ReactNode;
    user: SidebarUser;
    app: App;
    isOpened?: boolean;
    setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface MidasSidebar {
    items: SidebarLinkGroup[];
    app: App;
    isOpened?: boolean;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    clientSideRouter?: (path: string, routerOptions: undefined) => void;
}
export declare const Layout: React.FC<MidasLayout>;
export declare const Sidebar: React.FC<MidasSidebar>;
export declare const Header: React.FC<MidasHeader>;
export {};
