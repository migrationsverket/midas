import { SidebarLinkProps } from '../Layout';
import * as React from 'react';
export declare const SidebarLink: ({ title, href, active, icon: IconComponent, isCollapsed, setIsOpened, }: SidebarLinkProps & {
    isCollapsed: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => import("react/jsx-runtime").JSX.Element;
