import { LabelProps as AriaLabelProps } from 'react-aria-components';
import * as React from 'react';
export interface LabelProps extends AriaLabelProps {
    /**
     * The visual variant of the component
     */
    variant?: 'label-01' | 'label-02';
}
export declare const Label: React.FC<LabelProps>;
