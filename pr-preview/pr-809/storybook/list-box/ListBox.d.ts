import { ListBoxProps } from 'react-aria-components';
import { ListBoxOption } from './types';
import { Node } from '@react-types/shared';
export declare const ListBox: <T extends ListBoxOption | Node<ListBoxOption>>({ className, children, ...rest }: ListBoxProps<T>) => import("react/jsx-runtime").JSX.Element;
