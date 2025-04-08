import { CalendarGridProps, RangeCalendarProps, DateValue } from 'react-aria-components';
interface MidasCalendarProps<T extends DateValue> extends RangeCalendarProps<T>, Pick<CalendarGridProps, 'weekdayStyle'> {
    errorMessage?: string;
}
export declare function RangeCalendar<T extends DateValue>({ errorMessage, weekdayStyle, className, ...props }: MidasCalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
