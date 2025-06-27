import * as React from 'react';
export interface ColorSchemeSwitchProps {
    /** Choose what element that should be affected by the scheme switch.
     * @default body
     */
    selector?: string;
    /** Set the default value for the color scheme. Default is "light dark" meaning follow system settings
     *
     * @default new Set(['light dark'])
     */
    defaultValue?: Set<'light' | 'dark' | 'light dark'>;
    className?: string;
}
export declare const ColorSchemeSwitch: React.FC<ColorSchemeSwitchProps>;
