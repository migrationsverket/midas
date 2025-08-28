import { CheckboxGroupState } from 'react-stately';
import { CheckboxGroupProps } from './CheckboxGroup';
import * as React from 'react';
interface CheckboxGroupFieldErrorProps extends CheckboxGroupProps {
    state: CheckboxGroupState;
}
export declare const CheckboxGroupFieldError: React.FC<CheckboxGroupFieldErrorProps>;
export {};
