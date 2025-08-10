import { Link as AriaLink, RouterProvider } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
export interface LinkComponentProps<C extends React.ElementType> {
    children: React.ReactNode;
    /** Use standalone to use the component as a standalone link, for example under a block of text.*/
    standalone?: boolean;
    /** Use stretched to make the entire parent element clickable to the link. The parent must have position: relative; so that the clickable area of the link does not extend too far.*/
    stretched?: boolean;
    /** Optional icon, placed to the left of the link */
    icon?: LucideIcon;
    className?: string;
    /** Replace base component with any Client Side Routing link instead.
     * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}
     */
    as?: C;
}
export type LinkProps<C extends React.ElementType> = LinkComponentProps<C> & Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>;
export declare const Link: <C extends React.ElementType = typeof AriaLink>({ children, standalone, target, stretched, download, icon: IconComponent, className, as, ...rest }: LinkProps<C>) => import("react/jsx-runtime").JSX.Element;
export { RouterProvider };
