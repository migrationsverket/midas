import { LabelProps as AriaLabelProps } from 'react-aria-components';
import * as React from 'react';
export type Variant = 'label-01' | 'label-02';
export interface LabelProps extends AriaLabelProps {
    /**
     * The visual variant of the component
     */
    variant?: Variant;
}
export declare const Label: React.FC<LabelProps>;
