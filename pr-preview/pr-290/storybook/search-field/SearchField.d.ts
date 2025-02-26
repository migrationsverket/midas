import { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components';
import * as React from 'react';
export interface SearchFieldProps extends AriaSearchFieldProps {
    /** Placeholder text */
    placeholder: string;
    /**
     *  Text displayed on the 'search' button
     *  @default
     *  'Sök'
     */
    buttonText?: string;
    /**
     * A function that returns an error message if a given value is invalid.
     * Validation errors are displayed to the user when the form is submitted if validationBehavior="native".
     * For realtime validation, use the isInvalid prop instead.
     *
     * To override the behavior of the isRequired prop you can instead use this property to return a custom error message.
     */
    validate?: AriaSearchFieldProps['validate'];
    /**
     * Whether user input is required on the input before form submission.
     * Currently have troubles displaying an error message, please use the validate property if it's needed.
     */
    isRequired?: AriaSearchFieldProps['isRequired'];
    /**
     * A custom error message if using the isInvalid prop.
     */
    errorMessage?: string;
}
export declare const SearchField: React.FC<SearchFieldProps>;
