import { RadioGroupProps, RadioProps, ValidationResult } from 'react-aria-components';
import { InfoPopoverProps } from '../label';
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
    /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
    popover?: InfoPopoverProps;
}
/**
 * RadioGroup is used to group several radio items together
 */
export declare const RadioGroup: React.FC<MVDSRadioGroupProps>;
export declare const Radio: ({ className, ...rest }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export {};
