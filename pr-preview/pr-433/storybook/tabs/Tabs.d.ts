import * as React from 'react';
export interface TabsProps {
    /**
     * An array of tab titles
     */
    tabs: string[];
    /**
     * Label for accessibility
     */
    label: string;
    /**
     * Choose another than the first tab to be selected by default. Name must match one of the tabs
     */
    defaultSelected?: string;
    /**
     * Amount of children must match the amount of tabs
     */
    children: React.ReactNode;
}
export declare const Tabs: React.FC<TabsProps>;
