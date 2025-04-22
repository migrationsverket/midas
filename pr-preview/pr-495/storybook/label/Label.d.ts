import { LabelProps as AriaLabelProps } from 'react-aria-components';
import * as React from 'react';
export interface LabelProps extends AriaLabelProps {
    /**
     * @deprecated This prop is no longer used. The label is always styled for dark backgrounds.
     */
    variant?: 'label-02';
}
export declare const Label: React.FC<LabelProps>;
