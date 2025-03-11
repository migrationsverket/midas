import * as React from 'react';
type Variant = 'normal' | 'bold';
export interface LabelProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    children: React.ReactNode;
    /**
     * The visual variant of the component
     */
    variant?: Variant;
}
export declare const Label: React.FC<LabelProps>;
export {};
