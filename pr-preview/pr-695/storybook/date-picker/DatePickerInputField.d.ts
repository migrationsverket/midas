import { Size } from '../common/types';
import * as React from 'react';
interface DatePickerInputFieldProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    isInvalid?: boolean;
    size?: Size;
}
export declare const DatePickerInputField: React.FC<DatePickerInputFieldProps>;
export {};
