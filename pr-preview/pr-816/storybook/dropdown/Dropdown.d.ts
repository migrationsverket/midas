import { MenuItemProps, MenuProps, MenuTriggerProps } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
/**
 *
 * @deprecated since v12.1.0
 * Please use `MenuProps` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export interface MidasMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
    label?: string;
    title?: string;
    /**
     * The icon to use for the menu button
     * @default EllipsisVertical
     */
    icon?: LucideIcon;
}
/**
 *
 * @deprecated since v12.1.0
 * Please use `Menu` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export declare function Dropdown<T extends object>({ label, title, children, icon: Icon, ...props }: MidasMenuButtonProps<T>): import("react/jsx-runtime").JSX.Element;
/**
 *
 * @deprecated since v12.1.0
 * Please use `Menu` and `MenuItem` instead
 * @see {@link https://designsystem.migrationsverket.se/components/menu/|Menu}
 */
export declare function DropdownItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
