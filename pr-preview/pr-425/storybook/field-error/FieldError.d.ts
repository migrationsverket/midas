import { FieldErrorProps, ValidationResult } from 'react-aria-components';
import * as React from 'react';
export type ErrorPosition = 'top' | 'bottom';
export type ErrorMessage = string | ((validation: ValidationResult) => string);
export declare const FieldError: React.ForwardRefExoticComponent<FieldErrorProps & React.RefAttributes<HTMLElement>>;
