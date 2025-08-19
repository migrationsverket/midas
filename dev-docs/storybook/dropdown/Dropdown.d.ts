import { MenuItemProps, MenuProps, MenuTriggerProps } from 'react-aria-components';
import { LucideIcon } from 'lucide-react';
export interface MidasMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
    label?: string;
    title?: string;
    /**
     * The icon to use for the menu button
     * @default EllipsisVertical
     */
    icon?: LucideIcon;
}
export declare function Dropdown<T extends object>({ label, title, children, icon: Icon, ...props }: MidasMenuButtonProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
