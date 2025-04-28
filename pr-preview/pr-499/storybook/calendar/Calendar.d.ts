import { CalendarProps as AriaCalendarProps, DateValue } from 'react-aria-components';
import * as React from 'react';
export interface CalendarProps extends AriaCalendarProps<DateValue> {
    errorMessage?: string;
}
export declare const Calendar: React.FC<CalendarProps>;
