export interface SpinnerProps {
    /** Displays a smaller spinner when set to true
     * @default false
     */
    small?: boolean;
    /** For use on coloured background
     * @default false
     */
    isOnColor?: boolean;
    className?: string;
}
export declare const Spinner: React.FC<SpinnerProps>;
