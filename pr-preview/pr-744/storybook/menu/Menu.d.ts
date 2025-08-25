import { MenuProps as AriaMenuProps } from 'react-aria-components';
import { Size } from '../common/types';
export interface MenuProps<T> extends AriaMenuProps<T> {
    /** Component size (large: height 40px, medium: height 32px)
     *  @default 'large'
     **/
    size?: Size;
}
export declare const Menu: <T extends object>({ className, size, ...rest }: MenuProps<T>) => import("react/jsx-runtime").JSX.Element;
