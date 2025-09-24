import { TabsProps as AriaTabsProps } from 'react-aria-components';
import * as React from 'react';
export interface TabsProps extends AriaTabsProps {
    /**
     * The orientation of the tabs.
     * Will adjust to screen size automatically if omitted
     * @default undefined
     */
    orientation?: AriaTabsProps['orientation'];
}
export declare const Tabs: React.FC<TabsProps>;
