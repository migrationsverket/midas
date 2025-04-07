import { DateFieldProps as AriaDateFieldProps, DateValue } from 'react-aria-components';
import { ErrorMessage, ErrorPosition } from '../field-error';
interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: ErrorMessage;
    errorPosition?: ErrorPosition;
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, className, errorPosition, ...props }: DateFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
