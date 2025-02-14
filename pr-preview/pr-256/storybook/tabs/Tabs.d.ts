import * as React from 'react';
export interface TabsProps<T extends string> {
    /** An array of tab titles */
    tabs: T[];
    /** Lable for accecibility */
    label: string;
    /** Choose another than the first tab to be selected by default. Name must match one of the tabs */
    defaultSelected?: T;
    /** Amount of children must match the amount of tabs */
    children: React.ReactNode;
}
export declare const Tabs: <T extends string>({ tabs, label, defaultSelected, children, }: TabsProps<T>) => import("react/jsx-runtime").JSX.Element;
