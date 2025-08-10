import { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from 'react-aria-components';
import { InfoPopoverProps } from '../label';
import { Size } from '../common/types';
import * as React from 'react';
export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
    label?: string;
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
    /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
    popover?: InfoPopoverProps;
}
export declare const DateField: React.FC<DateFieldProps>;
