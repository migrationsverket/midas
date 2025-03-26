import { ValidationResult } from 'react-aria-components';
interface InputWrapperProps {
    label?: string;
    description?: string;
    /** String to display as error message or function to handle the result and produce the error message */
    errorMessage?: string | ((validation: ValidationResult) => string);
    children?: React.ReactNode;
    className?: string;
}
export declare const InputWrapper: React.FC<InputWrapperProps>;
export {};
