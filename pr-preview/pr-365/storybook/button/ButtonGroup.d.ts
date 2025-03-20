import { ButtonProps, ContextValue } from 'react-aria-components';
interface ButtonContextValue extends ButtonProps {
    isPressed?: boolean;
}
export interface MidasButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Additional props to pass to child Buttons */
    contextValue?: ContextValue<ButtonContextValue, HTMLButtonElement>;
}
/**
 * Group several buttons together.
 *
 * @interface MidasButtonGroupProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */
export declare const ButtonGroup: React.FC<MidasButtonGroupProps>;
export {};
