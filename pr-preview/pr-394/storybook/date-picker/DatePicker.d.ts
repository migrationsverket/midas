import { DatePickerProps, DateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
interface MidasDateRangePickerProps<T extends DateValue> extends DateRangePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare const DateRangePicker: <T extends DateValue>({ label, description, errorMessage, errorPosition, ...props }: MidasDateRangePickerProps<T>) => import("react/jsx-runtime").JSX.Element;
interface MidasDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare const DatePicker: <T extends DateValue>({ label, description, errorMessage, errorPosition, ...props }: MidasDatePickerProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
