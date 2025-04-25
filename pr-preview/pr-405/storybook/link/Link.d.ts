import { Link as AriaLink, RouterProvider } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
interface MidasLinkProps<C extends React.ElementType> {
    children: React.ReactNode;
    /** Use standalone to use the component as a standalone link, for example under a block of text.*/
    standalone?: boolean;
    /** Use stretched to make the entire parent element clickable to the link. The parent must have position: relative; so that the clickable area of the link does not extend too far.*/
    stretched?: boolean;
    /** Optional icon, placed to the left of the link */
    icon?: LucideIcon;
    className?: string;
    as?: C;
}
export type LinkProps<C extends React.ElementType> = MidasLinkProps<C> & Omit<React.ComponentProps<C>, keyof MidasLinkProps<C>>;
export declare const Link: <C extends React.ElementType = (props: import('react-aria-components').LinkProps & React.RefAttributes<HTMLAnchorElement>) => React.ReactElement | null>({ children, standalone, stretched, icon: IconComponent, className, as, ...rest }: LinkProps<C>) => import("react/jsx-runtime").JSX.Element;
export { RouterProvider };
