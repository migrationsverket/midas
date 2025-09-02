import { InputProps } from 'react-aria-components';
import * as React from 'react';
export interface CharacterCounterProps extends InputProps {
    isLonely?: boolean;
    ref?: React.RefObject<HTMLInputElement | null>;
}
export declare const CharacterCounter: React.FC<CharacterCounterProps>;
