import { ListBoxSectionProps as AriaListBoxSectionProps } from 'react-aria-components';
import { ListBoxSectionElement } from './types';
import * as React from 'react';
export interface ListBoxSectionProps<T extends ListBoxSectionElement> extends Omit<AriaListBoxSectionProps<T>, 'children'> {
    name: React.ReactNode;
    children?: React.ReactNode;
}
export declare const ListBoxSection: <T extends ListBoxSectionElement>({ children, name, ...rest }: ListBoxSectionProps<T>) => import("react/jsx-runtime").JSX.Element;
