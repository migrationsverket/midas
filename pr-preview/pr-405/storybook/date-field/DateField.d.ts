import { DateFieldProps as AriaDateFieldProps, DateValue, ValidationResult } from 'react-aria-components';
interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    errorPosition?: 'top' | 'bottom';
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, className, errorPosition, ...props }: DateFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
