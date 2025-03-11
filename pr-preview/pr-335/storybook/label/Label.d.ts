import * as React from 'react';
type Variant = 'label-01' | 'label-02';
export interface LabelProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    children: React.ReactNode;
    /**
     * The visual variant of the component
     */
    variant?: Variant;
}
export declare const Label: React.FC<LabelProps>;
export {};
