import { LucideIcon } from 'lucide-react';
import * as React from 'react';
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
    /** The menu items/item groups */
    items: SidebarLinkGroup[];
    /** Title displayed at the top of the application header */
    title: string;
    children: React.ReactNode;
    /** List of links in the top right of the application header */
    headerChildren: React.ReactNode;
    /** Current user details */
    user: SidebarUser;
    /** Name of the app */
    app: App;
    /** Provide the layout with your router for client side navigation
     *
     * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/}
     */
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
