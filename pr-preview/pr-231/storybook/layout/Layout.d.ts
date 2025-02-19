import { LucideIcon } from 'lucide-react';
import * as React from 'react';
export interface SidebarLinkGroup {
    title?: string;
    items: SidebarLinkProps[];
}
export interface SidebarLinkProps {
    title: string;
    href: string;
    icon: LucideIcon;
    active?: boolean;
    isCollapsed?: boolean;
    setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SidebarUser {
    name: string;
    title: string;
}
type HEX = `#${string}`;
export interface App {
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
    headerChildren?: React.ReactNode;
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
export declare const Layout: React.FC<MidasLayout>;
export {};
