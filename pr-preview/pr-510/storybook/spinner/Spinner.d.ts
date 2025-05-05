export interface SpinnerProps {
    /** Displays a smaller spinner when set to true
     * @default false
     */
    small?: boolean;
    /** For use on coloured background
     * @default false
     */
    isOnColor?: boolean;
    /** For use on dark background
     * @default false
     * @deprecated since v8.0.0 please use `isOnColor` instead
     */
    dark?: boolean;
}
export declare const Spinner: React.FC<SpinnerProps>;
