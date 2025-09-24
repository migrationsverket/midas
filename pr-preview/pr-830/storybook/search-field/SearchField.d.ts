import { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components';
import { Size } from '../common/types';
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
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     * */
    size?: Size;
}
export declare const SearchField: React.FC<SearchFieldProps>;
