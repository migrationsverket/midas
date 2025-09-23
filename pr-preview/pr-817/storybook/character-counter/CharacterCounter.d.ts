import { InputProps } from 'react-aria-components';
import * as React from 'react';
export interface CharacterCounterProps extends InputProps {
    isLonely?: boolean;
}
export declare const CharacterCounter: React.ForwardRefExoticComponent<CharacterCounterProps & React.RefAttributes<HTMLInputElement>>;
