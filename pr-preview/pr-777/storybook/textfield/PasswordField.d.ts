import { InputProps } from './Input';
import * as React from 'react';
export interface PasswordFieldProps extends InputProps {
    ref?: React.Ref<HTMLInputElement>;
}
export declare const PasswordField: React.FC<PasswordFieldProps>;
