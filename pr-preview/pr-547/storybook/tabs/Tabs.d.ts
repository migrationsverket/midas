import { TabsProps as AriaTabsProps } from 'react-aria-components';
import * as React from 'react';
export interface TabsProps extends Omit<AriaTabsProps, 'orientation'> {
    /**
     * An array of tab titles
     */
    tabs: string[];
    /**
     * Label for accessibility
     */
    label: string;
    /**
     * Amount of children must match the amount of tabs
     */
    children: React.ReactNode;
    /**
     * @deprecated since v8.0.0
     * Please use `defaultSelectedKey` instead
     */
    defaultSelected?: string;
}
export declare const Tabs: React.FC<TabsProps>;
