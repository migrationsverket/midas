import { TabsProps as AriaTabsProps } from 'react-aria-components';
import * as React from 'react';
export interface TabsProps extends AriaTabsProps {
    /**
     * An array of tab titles
     * @deprecated since v.10.3.0 please use the declarative API
     * @see {@link https://designsystem.migrationsverket.se/components/tabs/|Tabs}
     */
    tabs?: string[];
    /**
     * Label for accessibility
     * @deprecated since v.10.3.0 please use the declarative API and use the `aria-label` prop on TabList instead
     * @see {@link https://designsystem.migrationsverket.se/components/tabs/|Tabs}
     */
    label?: string;
    /**
     * The orientation of the tabs.
     * Will adjust to screen size automatically if omitted
     * @default undefined
     */
    orientation?: AriaTabsProps['orientation'];
}
export declare const Tabs: React.FC<TabsProps>;
