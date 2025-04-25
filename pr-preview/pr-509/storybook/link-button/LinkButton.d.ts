import { default as React } from '../../../../node_modules/react';
import { Link as AriaLink, RouterProvider } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
interface MidasLinkProps<C extends React.ElementType> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon';
    fullwidth?: boolean;
    iconPlacement?: 'left' | 'right';
    icon?: LucideIcon; /**Optional icon prop */
    className?: string;
    as?: C;
}
export type LinkButtonProps<C extends React.ElementType> = MidasLinkProps<C> & Omit<React.ComponentProps<C>, keyof MidasLinkProps<C>>;
/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */
export declare const LinkButton: <C extends React.ElementType = (props: import('react-aria-components').LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null>({ children, variant, fullwidth, icon: IconComponent, iconPlacement, className, as, ...rest }: LinkButtonProps<C>) => import("react/jsx-runtime").JSX.Element;
export { RouterProvider };
