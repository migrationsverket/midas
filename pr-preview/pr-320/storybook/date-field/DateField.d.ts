import { DateFieldProps, DateValue, ValidationResult } from 'react-aria-components';
interface MyDateFieldProps<T extends DateValue> extends DateFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: MyDateFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
