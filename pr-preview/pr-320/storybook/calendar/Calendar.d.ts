import { CalendarGridProps, CalendarProps, DateValue } from 'react-aria-components';
interface MidasCalendarProps<T extends DateValue> extends CalendarProps<T>, Pick<CalendarGridProps, 'weekdayStyle'> {
    errorMessage?: string;
}
export declare function Calendar<T extends DateValue>({ errorMessage, weekdayStyle, ...props }: MidasCalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
