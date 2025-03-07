import { AriaToastProps, AriaToastRegionProps } from '@react-aria/toast';
import { QueuedToast, ToastQueue, ToastState } from '@react-stately/toast';
import { default as React } from '../../../../node_modules/react';
export interface MidasToast {
    message: string;
    type: 'success' | 'info' | 'warning' | 'important';
    children?: React.ReactNode;
}
interface ToastRegionProps<T> extends AriaToastRegionProps {
    state: ToastState<T>;
}
export interface ToastProps<T> extends AriaToastProps<T> {
    state: ToastState<T>;
    toast: QueuedToast<T>;
    children?: React.ReactNode;
}
interface ToastProviderProps extends AriaToastRegionProps {
    children?: ((state: ToastState<MidasToast>) => React.ReactNode) | React.ReactNode;
}
export declare const toastQueue: ToastQueue<MidasToast>;
export declare const GlobalToastRegion: (props: ToastProviderProps) => React.ReactPortal | null;
export declare const ToastProvider: ({ children, ...props }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare function ToastRegion<T extends MidasToast>({ state, ...props }: ToastRegionProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Toast<T extends MidasToast>({ state, ...props }: ToastProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
