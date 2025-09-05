import { FieldErrorProps as AriaFieldErrorProps } from 'react-aria-components';
import * as React from 'react';
export interface FieldErrorProps extends AriaFieldErrorProps {
    isInvalid?: boolean;
}
export declare const FieldError: React.ForwardRefExoticComponent<FieldErrorProps & React.RefAttributes<HTMLElement>>;
