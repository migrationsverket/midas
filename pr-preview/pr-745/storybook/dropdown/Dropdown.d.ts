import { MenuItemProps, MenuProps, MenuTriggerProps } from 'react-aria-components';
export interface MidasMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
    label?: string;
    title?: string;
}
export declare function Dropdown<T extends object>({ label, title, children, ...props }: MidasMenuButtonProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
