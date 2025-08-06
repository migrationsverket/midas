import { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
import { Size } from '../common/types';
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
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     **/
    size?: Size;
    /** Add an icon from lucide-react
     *
     * @see {@link https://lucide.dev/icons/|Lucide}
     */
    icon?: LucideIcon;
    /**
     * Adjust icon size
     *  @default 20
     * */
    iconSize?: number;
    /** Display the icon on the left or right side of the button text */
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
