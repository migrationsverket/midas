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
}
export declare const SearchField: React.FC<SearchFieldProps>;
