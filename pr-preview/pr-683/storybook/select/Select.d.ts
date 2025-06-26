import { SelectProps } from './types';
import * as React from 'react';
export declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "children" | "items"> & {
    options: import('..').ListBoxOption[];
} & React.RefAttributes<HTMLButtonElement>>;
