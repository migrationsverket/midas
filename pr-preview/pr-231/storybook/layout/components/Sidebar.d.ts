import { App, SidebarLinkGroup } from '../Layout';
import * as React from 'react';
export interface MidasSidebar {
    items: SidebarLinkGroup[];
    app: App;
    isOpened?: boolean;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    clientSideRouter?: (path: string, routerOptions: undefined) => void;
}
export declare const Sidebar: React.FC<MidasSidebar>;
