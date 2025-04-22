import { LabelProps as AriaLabelProps } from 'react-aria-components';
import * as React from 'react';
export interface LabelProps extends AriaLabelProps {
    /**
     * @deprecated Please use Label without variant.
     */
    variant?: 'label-02';
}
export declare const Label: React.FC<LabelProps>;
