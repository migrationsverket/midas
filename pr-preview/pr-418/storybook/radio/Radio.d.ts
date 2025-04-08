import { RadioGroupProps, RadioProps, ValidationResult } from 'react-aria-components';
import * as React from 'react';
interface MVDSRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
    children?: React.ReactNode;
    /** Label for the RadioGroup */
    label?: string;
    /** Additional description rendered below the label */
    description?: string;
    /** String to display as error message or function to handle the result and produce the error message */
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
/**
 * RadioGroup is used to group several radio items together
 */
export declare const RadioGroup: React.FC<MVDSRadioGroupProps>;
/**
 * Radio item
 * */
export declare const Radio: (props: RadioProps) => import("react/jsx-runtime").JSX.Element;
export {};
