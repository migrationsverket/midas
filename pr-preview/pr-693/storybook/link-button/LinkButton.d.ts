import { default as React } from '../../../../node_modules/react';
import { Link as AriaLink, RouterProvider } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
import { Size } from '../common/types';
interface MidasLinkProps<C extends React.ElementType> {
    children: React.ReactNode;
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
    /** Display the icon on the left or right side of the button text */
    iconPlacement?: 'left' | 'right';
    /** Add an icon from lucide-react
     *
     * @see {@link https://lucide.dev/icons/|Lucide}
     */
    icon?: LucideIcon; /**Optional icon prop */
    className?: string;
    /** Replace base component with any Client Side Routing link instead.
     * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}
     */
    as?: C;
    /** Component size (large: height 48px, medium: height 40px)
     *  @default 'large'
     **/
    size?: Size;
}
export type LinkButtonProps<C extends React.ElementType> = MidasLinkProps<C> & Omit<React.ComponentProps<C>, keyof MidasLinkProps<C>>;
/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export declare const LinkButton: <C extends React.ElementType = (props: import('react-aria-components').LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null>({ children, variant, fullwidth, icon: IconComponent, iconPlacement, className, as, size, ...rest }: LinkButtonProps<C>) => import("react/jsx-runtime").JSX.Element;
export { RouterProvider };
