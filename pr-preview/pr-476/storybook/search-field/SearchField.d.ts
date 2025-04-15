import { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components';
import * as React from 'react';
export interface SearchFieldProps extends Omit<AriaSearchFieldProps, 'isRequired'> {
    /** Placeholder text */
    placeholder: string;
    /**
     *  Text displayed on the 'search' button
     *  @default
     *  'Sök'
     */
    buttonText?: string;
    /**
     * A custom error message if using the isInvalid prop.
     */
    errorMessage?: string;
    errorPosition?: 'top' | 'bottom';
}
export declare const SearchField: React.FC<SearchFieldProps>;
