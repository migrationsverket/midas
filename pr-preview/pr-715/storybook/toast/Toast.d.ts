import { AriaToastProps, AriaToastRegionProps } from 'react-aria';
import { QueuedToast, ToastQueue, ToastState, ToastStateProps } from 'react-stately';
import { default as React } from '../../../../node_modules/react';
export interface MidasToast {
    message: string;
    type: 'success' | 'info' | 'warning' | 'important';
    children?: React.ReactNode;
}
interface ToastRegionProps<T> extends AriaToastRegionProps {
    state: ToastState<T>;
    className?: string;
}
export interface ToastProps<T> extends AriaToastProps<T> {
    state: ToastState<T>;
    toast: QueuedToast<T>;
    children?: React.ReactNode;
    className?: string;
}
interface ToastProviderProps extends AriaToastRegionProps {
    children?: ((state: ToastState<MidasToast>) => React.ReactNode) | React.ReactNode;
    className?: string;
}
/**
 * Temporary implementation of https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/toast/src/useToastState.ts#L59
 * TODO: Erase this as soon as react-stately is released
 */
export declare function useToastState<T>(props?: ToastStateProps): ToastState<T>;
export declare const toastQueue: ToastQueue<MidasToast>;
export declare const GlobalToastRegion: (props: ToastProviderProps) => React.ReactPortal | null;
export declare const ToastProvider: ({ children, ...props }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare function ToastRegion<T extends MidasToast>({ state, className, ...props }: ToastRegionProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Toast<T extends MidasToast>({ state, className, ...props }: ToastProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
