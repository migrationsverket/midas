import { DatePickerProps, DateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
interface MidasDateRangePickerProps<T extends DateValue> extends DateRangePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare const DateRangePicker: <T extends DateValue>({ label, description, errorMessage, ...props }: MidasDateRangePickerProps<T>) => import("react/jsx-runtime").JSX.Element;
interface MidasDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare const DatePicker: <T extends DateValue>({ label, description, errorMessage, ...props }: MidasDatePickerProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
