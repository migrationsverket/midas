import { App, SidebarUser } from '../Layout';
import * as React from 'react';
export interface MidasHeader {
    title: string;
    headerChildren: React.ReactNode;
    user: SidebarUser;
    app: App;
    isOpened?: boolean;
    setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const Header: React.FC<MidasHeader>;
