import { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from 'react-aria-components';
import * as React from 'react';
export interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
    errorMessage?: string;
}
export declare const RangeCalendar: React.FC<RangeCalendarProps>;
