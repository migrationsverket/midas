import { LabelProps as AriaLabelProps } from 'react-aria-components';
import * as React from 'react';
export interface LabelProps extends AriaLabelProps {
    /**
     *  @deprecated Please use Label without variant for label-02, and for label-01 use Text component with slot: 'description'
     */
    variant?: 'label-01' | 'label-02';
}
export declare const Label: React.FC<LabelProps>;
