import { MenuItemProps as AriaMenuItemProps } from 'react-aria-components';
import { LinkDOMProps } from '@react-types/shared';
import { MenuItemObject } from '.';
export type MenuItemProps<T> = Omit<AriaMenuItemProps<T>, keyof LinkDOMProps>;
export declare const MenuItem: <T extends MenuItemObject>(props: MenuItemProps<T>) => import("react/jsx-runtime").JSX.Element;
