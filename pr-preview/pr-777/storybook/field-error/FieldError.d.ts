import { FieldErrorProps as AriaFieldErrorProps } from 'react-aria-components';
import * as React from 'react';
export interface FieldErrorProps extends AriaFieldErrorProps {
    isInvalid?: boolean;
    ref?: React.Ref<HTMLElement>;
}
export declare const FieldError: React.FC<FieldErrorProps>;
