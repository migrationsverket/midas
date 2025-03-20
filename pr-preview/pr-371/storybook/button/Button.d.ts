import { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
import * as React from 'react';
export interface MidasButtonProps {
    /**
     * Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label
     *
     * @default 'primary'
     * */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon';
    /**
     * Adds width: 100%; for the button to span entire width of parent
     *
     * @default false
     */
    fullwidth?: boolean;
    /** Choose between different button sizes */
    /** @deprecated This variant will be replaced with a new scaling api accross all components. */
    size?: 'small';
    /** Add an icon from lucide-react
     *
     * @see {@link https://lucide.dev/icons/}
     */
    icon?: LucideIcon;
    /** Adjust icon size */
    iconSize?: number;
    /** Display your icon on the left och right side of the button text */
    iconPlacement?: 'left' | 'right';
    children?: React.ReactNode | ((values: ButtonRenderProps & {
        defaultChildren: React.ReactNode | undefined;
    }) => React.ReactNode) | string;
}
type MidasButton = MidasButtonProps & ButtonProps;
/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */
export declare const Button: React.FC<MidasButton>;
export {};
