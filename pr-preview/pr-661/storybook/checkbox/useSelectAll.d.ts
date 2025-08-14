import { CheckboxGroupState } from 'react-stately';
import * as React from 'react';
export declare const useSelectAll: (children: React.ReactNode, { value: selectedItems }: CheckboxGroupState) => {
    allSelected: boolean;
    someSelected: boolean;
    checkboxValues: string[];
};
