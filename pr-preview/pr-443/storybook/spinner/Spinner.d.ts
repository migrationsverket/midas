export interface SpinnerProps {
    /** Displays a smaller when set to true
     * @default false
     * */
    small?: boolean;
    /** For use on coloured background
     * @default false
     * */
    isOnColor?: boolean;
    /** For use on dark background
     * @default false
     * @deprecated please use `isOnColor` instead
     * */
    dark?: boolean;
}
export declare const Spinner: React.FC<SpinnerProps>;
